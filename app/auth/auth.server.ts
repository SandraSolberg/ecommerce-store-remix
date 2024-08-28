import bcrypt from 'bcryptjs';
import { createCookieSessionStorage, json, redirect } from '@remix-run/node';
import { LoginForm, RegisterForm, User } from '~/types/types';
import { prisma } from './prisma.server';
import { createUser } from './user.server';

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) throw new Error('Secret not specified, it must be set');

// create a session cookie for the user
const storage = createCookieSessionStorage({
  cookie: {
    name: 'remix-mongo-auth',
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export async function createUserSession(userId: string, redirectTo: string) {
  console.log('user', userId);
  const session = await storage.getSession();
  session.set('userId', userId);
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.commitSession(session),
    },
  });
}

export async function register(user: RegisterForm) {
  try {
    const exists = await prisma.user.count({
      where: { email: user.email },
    });

    if (exists) {
      return json(
        { error: `User already exists with that email` },
        { status: 400 }
      );
    }

    const newUser = await createUser(user);
    if (!newUser) {
      return json(
        {
          error: `Something went wrong trying to create a new user.`,
          fields: {
            email: user.email,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
          },
        },
        { status: 400 }
      );
    }
    return createUserSession(newUser.id, '/');
  } catch (error) {
    console.error('Error counting users:', error);
    return json(
      { error: 'An error occurred while checking user existence' },
      { status: 500 }
    );
  }
}

export async function login(form: LoginForm) {
  const { email, password } = form;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    console.log('user', user);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return json({ error: `Incorrect login` }, { status: 400 });
    }

    return createUserSession(user.id, '/');
  } catch (error) {
    json(
      { error: 'An error occurred while checking user existence' },
      { status: 500 }
    );
  }
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request);
  const userId = session.get('userId');
  if (!userId || typeof userId !== 'string') {
    const searchParams = new URLSearchParams([['redirectTo', redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}

function getUserSession(request: Request) {
  return storage.getSession(request.headers.get('Cookie'));
}

async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get('userId');
  if (!userId || typeof userId !== 'string') return null;
  return userId;
}

export async function getUser(request: Request) {
  const userId = await getUserId(request);
  if (typeof userId !== 'string') {
    return null;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, profile: true },
    });
    return user as User | null;
  } catch {
    throw logout(request);
  }
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect('/login', {
    headers: {
      'Set-Cookie': await storage.destroySession(session),
    },
  });
}

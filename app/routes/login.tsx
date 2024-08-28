import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
} from '@remix-run/node';
import { getUser, login, register } from '~/auth/auth.server';
import PageWrapper from '~/components/atom/PageWrapper/PageWrapper';
import SignInForm from '~/components/compound/SignInForm/SignInForm';

export const loader: LoaderFunction = async ({ request }) => {
  // If there's already a user in the session, redirect to the home page
  return (await getUser(request)) ? redirect('/') : null;
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const action = form.get('_action');
  console.log('action triggered', action);
  const email = form.get('email');
  const password = form.get('password');
  const firstName = form.get('firstName') as string;
  const lastName = form.get('lastName') as string;

  if (
    typeof action !== 'string' ||
    typeof email !== 'string' ||
    typeof password !== 'string'
  ) {
    return json({ error: `Invalid Form Data`, form: action }, { status: 400 });
  }

  if (
    action === 'register' &&
    (typeof firstName !== 'string' || typeof lastName !== 'string')
  ) {
    return json({ error: `Invalid Form Data`, form: action }, { status: 400 });
  }

  switch (action) {
    case 'login': {
      const loginFields = { email, password };
      console.log('login for', email, password);
      return await login(loginFields);
    }
    case 'register': {
      const allFields = { email, password, firstName, lastName };

      return await register(allFields);
    }
    default:
      return json({ error: `Invalid Form Data` }, { status: 400 });
  }
};

const Login = () => {
  return (
    <PageWrapper>
      <SignInForm />
    </PageWrapper>
  );
};

export default Login;

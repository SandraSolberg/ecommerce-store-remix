import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
} from '@remix-run/node';
import { getUser, login, register } from '~/auth/auth.server';
import PageWrapper from '~/components/atom/PageWrapper/PageWrapper';
import Welcome from '~/components/atom/Welcome/Welcome';
import SignInForm from '~/components/compound/SignInForm/SignInForm';
import { errorMessage } from '~/utils/errorMessages';
import {
  validateEmail,
  validateName,
  validatePassword,
  validateRequired,
} from '~/utils/validation';

export const loader: LoaderFunction = async ({ request }) => {
  // If there's already a user in the session, redirect to the home page
  return (await getUser(request)) ? redirect('/') : null;
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const action = form.get('_action');
  const email = form.get('email');
  const password = form.get('password');
  const firstName = form.get('firstName') as string;
  const lastName = form.get('lastName') as string;

  if (
    typeof action !== 'string' ||
    typeof email !== 'string' ||
    typeof password !== 'string'
  ) {
    return json(
      { error: errorMessage.invalidForm, form: action },
      { status: 400 }
    );
  }

  if (
    action === 'register' &&
    (typeof firstName !== 'string' || typeof lastName !== 'string')
  ) {
    return json(
      { error: errorMessage.invalidForm, form: action },
      { status: 400 }
    );
  }

  const errors = {
    email:
      action === 'login' ? validateRequired(email) : validateEmail(email) ?? '',
    password:
      action === 'login'
        ? validateRequired(password)
        : validatePassword(password) ?? '',
    ...(action === 'register' && {
      firstName: validateName((firstName as string) || '') ?? '',
      lastName: validateName((lastName as string) || '') ?? '',
    }),
  };

  if (Object.values(errors).some(Boolean))
    return json(
      {
        errors,
        fields: { email, password, firstName, lastName },
        form: action,
      },
      { status: 400 }
    );

  switch (action) {
    case 'login': {
      const loginFields = { email, password };
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
      <div className='flex flex-row justify-between'>
        <Welcome />
        <SignInForm />
      </div>
    </PageWrapper>
  );
};

export default Login;

import { ActionFunction, LoaderFunction, redirect } from '@remix-run/node';
import { logout } from '~/auth/auth.server';

export const action: ActionFunction = async ({ request }) => logout(request);
export const loader: LoaderFunction = async () => redirect('/login');

const Logout = () => {
  return <div>Signing out</div>;
};

export default Logout;

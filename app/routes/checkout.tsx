import { LoaderFunction } from '@remix-run/node';
import { requireUserId } from '~/auth/auth.server';

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};

const checkout = () => {
  return <div>checkout</div>;
};

export default checkout;

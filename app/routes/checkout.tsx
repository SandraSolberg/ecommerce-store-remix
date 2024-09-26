import { LoaderFunction } from '@remix-run/node';
import { requireUserId } from '~/auth/auth.server';
import CheckoutPage from '~/components/modules/Checkout/CheckoutPage';

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};

const Checkout = () => {
  return <CheckoutPage />;
};

export default Checkout;

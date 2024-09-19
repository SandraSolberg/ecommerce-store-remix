import { LoaderFunction } from '@remix-run/node';
import { requireUserId } from '~/auth/auth.server';
import PageWrapper from '~/components/atom/PageWrapper/PageWrapper';

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};

const Cart = () => {
  return (
    <PageWrapper>
      <h1>Cart</h1>
    </PageWrapper>
  );
};

export default Cart;

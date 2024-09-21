import { LoaderFunction } from '@remix-run/node';
import { requireUserId } from '~/auth/auth.server';
import CardPageWrapper from '~/components/common/atom/CardPageWrapper/CardPageWrapper';

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};

const Cart = () => {
  return (
    <CardPageWrapper>
      <h1>Cart</h1>
    </CardPageWrapper>
  );
};

export default Cart;

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
      <h1 className='text-3xl'>Cart</h1>
      <p>test</p>
    </PageWrapper>
  );
};

export default Cart;

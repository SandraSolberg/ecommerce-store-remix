import { LoaderFunction } from '@remix-run/node';
import { requireUserId } from '~/auth/auth.server';
import CustomAlert from '~/components/common/atom/CustomAlert/CustomAlert';
import PageWrapper from '~/components/common/atom/PageWrapper/PageWrapper';
import OrderSummary from '~/components/common/molecule/OrderSummary/OrderSummary';
import CustomerInfoForm from '~/components/common/organisms/CustomerInfoForm/CustomerInfoForm';
import useCartActions from '~/hooks/useCartActions';

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};

const Checkout = () => {
  const { productSum } = useCartActions();
  return (
    <PageWrapper title='Checkout'>
      <div className='md:grid md:grid-cols-12 md:gap-4'>
        <section className='bg-white p-10 md:col-start-1 md:col-end-8'>
          <h2 className='mb-4'>Delivery</h2>
          <CustomAlert
            message='This is not a real order. This site is made for educational purposes only '
            severity='warning'
            className='max-w-fit'
          />
        </section>

        <section className='flex justify-center mt-4 bg-white p-10 md:col-start-1 md:col-end-8'>
          <CustomerInfoForm />
        </section>

        <section className='md:col-start-8 md:col-end-13 md:row-start-1'>
          <OrderSummary
            hasContrast
            hideLink
            products={productSum}
            shipping={0}
            currency={'kr'}
          />
        </section>
      </div>
    </PageWrapper>
  );
};

export default Checkout;

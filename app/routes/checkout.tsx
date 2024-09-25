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
        <section className=' flex flex-col items-center gap-4 bg-white p-10 md:col-start-1 md:col-end-8'>
          <div className='w-full max-w-[28.5rem]'>
            <CustomerInfoForm />
          </div>
          <CustomAlert
            message='This is not a real order. This site is made for educational purposes only '
            severity='warning'
            className='max-w-[28.5rem] '
          />
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

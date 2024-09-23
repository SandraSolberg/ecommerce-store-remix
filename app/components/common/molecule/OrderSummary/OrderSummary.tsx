import { Link } from '@remix-run/react';

type OrderSummaryProps = {
  products: number;
  shipping: number;
  currency: string;
  hideLink?: boolean;
  hasContrast?: boolean;
};

const OrderSummary = ({
  products,
  shipping,
  currency,
  hideLink,
  hasContrast,
}: OrderSummaryProps) => {
  const total = products + shipping;
  return (
    <div className={` p-4 ${hasContrast ? 'bg-white ' : 'bg-blue-100'}`}>
      <div className='flex flex-col gap-4'>
        <p className='font-semibold text-blue-900'>Summary</p>
        <div className='flex justify-between'>
          <p>Products</p>
          <p>{products + ' ' + currency}</p>
        </div>
        <div className='flex justify-between'>
          <p>Shipping</p>
          <p>{shipping + ' ' + currency}</p>
        </div>

        <hr className=' border border-b border-gray-300' />
        <div className='flex justify-between'>
          <p className='font-semibold text-blue-900'>Total</p>
          <p className='font-semibold text-blue-900'>
            {total + ' ' + currency}
          </p>
        </div>
      </div>

      <div className='my-4 flex'>
        {hideLink ? null : (
          <Link
            to='/checkout'
            className='text-white hover:no-underline w-full  bg-blue-500 text-base text-center font-medium py-3
      rounded-lg hover:bg-blue-600'
          >
            Continue to checkout
          </Link>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;

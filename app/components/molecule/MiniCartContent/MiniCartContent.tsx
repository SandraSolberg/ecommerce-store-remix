import { Link } from '@remix-run/react';
import ItemList from '~/components/atom/ItemList/ItemList';
import { useAppSelector } from '~/redux/store';
import './miniCartContent.css';

const MiniCartContent = () => {
  const cart = useAppSelector((state) => state.cart);

  console.log('cart', cart);

  return (
    <>
      {cart.addedItems.length === 0 ? (
        <div className='noContent'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#1767ce'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0' />
          </svg>
          <div>
            <h3>Time to start shopping!</h3>
            <p>Fill it up with items for your taco</p>
          </div>
        </div>
      ) : (
        <div className='miniCartContainer'>
          <ItemList items={cart.addedItems} total={cart.total} />

          <Link
            className='mt-4 w-full bg-blue-500 text-white text-sm text-center font-semibold py-3 rounded-lg hover:bg-blue-600 '
            to='/cart'
          >
            Go to checkout
          </Link>
        </div>
      )}
    </>
  );
};

export default MiniCartContent;

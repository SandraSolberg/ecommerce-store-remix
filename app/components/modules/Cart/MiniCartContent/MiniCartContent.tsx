import { Link } from '@remix-run/react';
import { useAppDispatch, useAppSelector } from '~/redux/store';
import { toggleSlider } from '~/redux/cartSlice';
import NoContent from '~/components/common/atom/NoContent/NoContent';
import MiniCartList from '../MiniCartList/MiniCartList';
import './miniCartContent.css';

const MiniCartContent = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <>
      {cart.addedItems.length === 0 ? (
        <NoContent />
      ) : (
        <div className='miniCartContainer overflow-y-auto relative'>
          <MiniCartList items={cart.addedItems} total={cart.total} />

          <Link
            className='mt-4 w-full bg-blue-500 text-white text-base text-center font-medium py-3 rounded-lg hover:bg-blue-600 hover:no-underline sticky bottom-0'
            to='/cart'
            onClick={() => dispatch(toggleSlider(false))}
          >
            Proceed to checkout
          </Link>
        </div>
      )}
    </>
  );
};

export default MiniCartContent;
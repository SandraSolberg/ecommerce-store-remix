import { Link } from '@remix-run/react';
import { useAppDispatch, useAppSelector } from '~/redux/store';
import { toggleSlider } from '~/redux/cartSlice';
import SVGIcon from '~/components/common/atom/SVGIcon/SVGIcon';
import MiniCartList from '../MiniCartList/MiniCartList';
import './miniCartContent.css';

const MiniCartContent = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <>
      {cart.addedItems.length === 0 ? (
        <div className='noContent'>
          <SVGIcon height='32' width='32' stroke='#1767ce'>
            <path d='M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0' />
          </SVGIcon>
          <div>
            <h3>Time to start shopping!</h3>
            <p>Fill it up with items for your taco</p>
          </div>
        </div>
      ) : (
        <div className='miniCartContainer'>
          <MiniCartList items={cart.addedItems} total={cart.total} />

          <Link
            className='mt-4 w-full bg-blue-500 text-white text-base text-center font-medium py-3 rounded-lg hover:bg-blue-600 hover:no-underline'
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

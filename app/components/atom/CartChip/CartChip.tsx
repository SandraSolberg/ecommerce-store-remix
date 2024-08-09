import { toggleSlider } from '~/redux/cartSlice';
import { useAppDispatch, useAppSelector } from '~/redux/store';
import numberToFixedString from '~/utils/numberToFixedString';

export const CartChip = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleOpenSlider = () => {
    dispatch(toggleSlider(!cart.isOpen));
  };

  const hasItems = cart.total > 0;
  const displayTotalAmount = numberToFixedString(cart.total);

  return (
    <div
      role='button'
      tabIndex={0}
      className={`flex gap-2 border-solid border rounded-lg p-2 font-medium ${
        hasItems
          ? 'bg-orange-500 hover:bg-orange-600 text-white'
          : 'border-gray-300 hover:bg-gray-200'
      }  `}
      onClick={handleOpenSlider}
      onKeyDown={handleOpenSlider}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke={hasItems ? 'white' : 'var(--color-primary)'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='10' cy='20.5' r='1' />
        <circle cx='18' cy='20.5' r='1' />
        <path d='M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1' />
      </svg>
      <p>kr {displayTotalAmount}</p>
      {!cart.isOpen ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke={hasItems ? 'white' : 'var(--color-primary)'}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M15 18l-6-6 6-6' />
        </svg>
      ) : null}
    </div>
  );
};

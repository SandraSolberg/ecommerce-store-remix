import { removeItem } from '~/redux/cartSlice';
import { useAppDispatch } from '~/redux/store';
import { CartItem } from '~/types/cart';
import numberToFixedString from '~/utils/numberToFixedString';
import { Indicator } from '../../atom/Indicator/Indicator';
import { ModalActionEnum, ModalStateType } from '~/types/types';
import { setModal } from '~/redux/uiStateSlice';

type ItemListProps = {
  items: CartItem[];
  total: number;
};

const MiniCartList = ({ items, total }: ItemListProps) => {
  const dispatch = useAppDispatch();
  const estimatedTotal = numberToFixedString(total);

  const handleRemove = (itemToRemove: CartItem) => {
    dispatch(removeItem({ id: itemToRemove.foodId }));
  };

  const sumItems = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.count,
    0
  );

  const handleEmptyCart = () => {
    const modal: ModalStateType = {
      title: 'Are you sure you want to remove all items from your cart?',
      details: 'This action will remove everything from your shopping cart',
      primaryBtnText: 'Empty cart',
      secondaryBtnText: 'Cancel',
      open: true,
      actionType: ModalActionEnum.EmptyCart,
    };

    dispatch(setModal(modal));
  };

  return (
    <div>
      {Object.entries(items).map(([key, object]) => (
        <div
          key={key}
          className='border-b m-h-28 py-2 flex flex-row justify-between items-start'
        >
          <div className='flex content-center gap-4'>
            <img className='w-14 h-20' alt='' src={object.image ?? undefined} />
            <div>
              <p className='font-semibold'>{object.foodName}</p>
              <p>{`${object.quantity?.amount}${object.quantity?.unit}`}</p>
              <p className='font-semibold'>
                {numberToFixedString(object.price ?? 0)}
                {object.currency}
              </p>
              <p>Total: {object.count}</p>
            </div>
          </div>

          <button
            onClick={() => handleRemove(object)}
            className='hover:bg-gray-200 rounded-full'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#061629'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <line x1='6' y1='6' x2='18' y2='18'></line>
            </svg>
          </button>
        </div>
      ))}
      <div className='flex flex-col justify-between'>
        <Indicator
          message={`You have ${sumItems} items in your cart`}
          onDelete={handleEmptyCart}
        />
        <div className='flex flex-row justify-between'>
          <p className='font-semibold'>Estimated total</p>
          <p className='font-semibold'>{estimatedTotal} kr</p>
        </div>
      </div>
    </div>
  );
};

export default MiniCartList;

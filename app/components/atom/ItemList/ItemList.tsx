import { removeItem } from '~/redux/cartSlice';
import { useAppDispatch } from '~/redux/store';
import { CartItem } from '~/types/cart';
import numberToFixedString from '~/utils/numberToFixedString';

type ItemListProps = {
  items: CartItem[];
  total: number;
};

const ItemList = ({ items, total }: ItemListProps) => {
  const dispatch = useAppDispatch();
  const estimatedTotal = numberToFixedString(total);

  const handleRemove = (itemToRemove: CartItem) => {
    dispatch(removeItem({ id: itemToRemove.foodId }));
  };

  return (
    <div>
      {Object.entries(items).map(([key, object]) => (
        <div
          key={key}
          className='border-b h-28 mb-2 flex flex-row justify-between items-start'
        >
          <div className='flex content-center gap-4'>
            <img className='w-14 h-20' alt='' src={object.image ?? undefined} />
            <div>
              <p className='font-semibold'>{object.foodName}</p>
              <p>{`${object.quantity?.amount}${object.quantity?.unit}`}</p>
              <p className='font-semibold text-blue-primary'>
                {numberToFixedString(object.price ?? 0)}
                {object.currency}
              </p>
              <p>Total: {object.count}</p>
            </div>
          </div>

          <button
            onClick={() => handleRemove(object)}
            className='hover:bg-blue-025 rounded-sm'
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
      <div className='flex justify-between my-2'>
        <p className='font-semibold'>Estimated total</p>
        <p className='font-semibold'>{estimatedTotal} kr</p>
      </div>
    </div>
  );
};

export default ItemList;

import { CartItem } from '~/types/cart';
import numberToFixedString from '~/utils/numberToFixedString';
import SVGIcon from '~/components/common/atom/SVGIcon/SVGIcon';
import { Indicator } from '~/components/common/atom/Indicator/Indicator';
import useCartActions from '~/hooks/useCartActions';

type ItemListProps = {
  items: CartItem[];
  total: number;
};

const MiniCartList = ({ items, total }: ItemListProps) => {
  const { handleRemove, handleEmptyCart } = useCartActions();
  const estimatedTotal = numberToFixedString(total);

  const sumItems = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.count,
    0
  );

  return (
    <div>
      {Object.entries(items).map(([key, object]) => (
        <div
          key={key}
          className='border-b m-h-28 py-2 flex flex-row justify-between items-start'
        >
          <div className='flex content-center gap-4'>
            <img
              className='w-14 h-20 object-contain'
              alt=''
              src={object.image ?? undefined}
            />
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
            onClick={() => handleRemove(object.foodId)}
            className='hover:bg-gray-200 rounded-full'
          >
            <SVGIcon height='20' width='20'>
              <>
                <line x1='18' y1='6' x2='6' y2='18'></line>
                <line x1='6' y1='6' x2='18' y2='18'></line>
              </>
            </SVGIcon>
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

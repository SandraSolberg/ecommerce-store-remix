import { addItem } from '~/redux/cartSlice';
import { useAppDispatch } from '~/redux/store';
import { FoodType } from '~/types/food';

type ProductCardProps = {
  item: FoodType;
};

const ProductCard = ({ item }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <a href='/product'>
      <article className='w-48 min-h-[376px]  bg-pure-white m-2 p-2 rounded-2xl shadow-secondary-1 flex flex-col justify-between'>
        <img
          className='w-full h-40 object-cover rounded-t-lg '
          alt={item.foodName ?? 'image of item'}
          src={item.image ?? undefined}
        />
        <div className='p-2'>
          <div className='flex items-center mt-2'>
            <span className='text-yellow-500'>★★★★★</span>
            <span className='text-gray-500 text-xs ml-1'>(4)</span>
          </div>
          <p className='font-semibold'>{`${item.currency} ${item.price}`}</p>
          <h4>{item.foodName}</h4>
          <p className='text-sm text-gray-500'>{`${item.quantity?.amount} ${item.quantity?.unit}`}</p>

          <button
            className='mt-4 w-full bg-blue-500 text-white text-sm font-semibold py-2 rounded-lg hover:bg-blue-600 cursor-default'
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(addItem({ foodItem: item }));
            }}
          >
            Add
          </button>
        </div>
      </article>
    </a>
  );
};

export default ProductCard;

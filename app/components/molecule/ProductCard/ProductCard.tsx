import { Link } from '@remix-run/react';
import BasicButton from '~/components/atom/BasicButton/BasicButton';
import { addItem } from '~/redux/cartSlice';
import { useAppDispatch } from '~/redux/store';
import { IFoodItem } from '~/types/food';

type ProductCardProps = {
  item: IFoodItem;
};

const ProductCard = ({ item }: ProductCardProps) => {
  const dispatch = useAppDispatch();

  const handleAddProduct = () => {
    dispatch(addItem({ foodItem: item }));
  };

  return (
    <Link to={`/products/${item.foodId}`} className='hover:no-underline'>
      <article className='w-48 min-h-[376px]  bg-pure-white m-2 p-2 rounded-2xl shadow-secondary-1 flex flex-col justify-between shadow'>
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
          <p className='font-semibold'>{`${item.price} ${item.currency} `}</p>
          <h4>{item.foodName}</h4>
          <p className='text-sm text-secondary'>{`${item.quantity?.amount} ${item.quantity?.unit}`}</p>

          <BasicButton onClick={handleAddProduct} />
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;

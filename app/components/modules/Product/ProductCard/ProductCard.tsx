import { Link } from '@remix-run/react';
import BasicButton from '~/components/atom/BasicButton/BasicButton';
import QuantityButtonGroup from '~/components/atom/QuantityButtonGroup/QuantityButtonGroup';
import Rating from '~/components/atom/Rating/Rating';
import { addItem, changeNumberOfItems, removeByOne } from '~/redux/cartSlice';
import { useAppDispatch, useAppSelector } from '~/redux/store';
import { IFoodItem } from '~/types/food';

type ProductCardProps = {
  item: IFoodItem;
};

const ProductCard = ({ item }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.addedItems);

  const handleAddProduct = () => {
    dispatch(addItem({ foodItem: item }));
  };

  const existsInCart = cartItems.find(
    (cartItem) => cartItem.foodId === item.foodId
  );

  const onIncrement = () => {
    dispatch(addItem({ foodItem: item }));
  };
  const onDecrement = (value: string) => {
    dispatch(removeByOne({ foodItem: item, currentNumber: +value }));
  };
  const onInputChange = (value: string) => {
    dispatch(changeNumberOfItems({ foodItem: item, currentCount: +value }));
  };

  return (
    <Link to={`/products/${item.foodId}`} className='hover:no-underline'>
      <article className='w-48 min-h-[24.8rem]  bg-pure-white m-2 p-2 rounded-lg flex flex-col justify-between shadow hover:shadow-md'>
        <div>
          <img
            className='w-full h-40 object-cover rounded-t-lg '
            alt={item.foodName ?? 'image of item'}
            src={item.image ?? undefined}
          />
          <div className='px-2'>
            <div className='flex items-center mt-2'>
              <Rating />
            </div>
            <p className='font-semibold'>{`${item.price} ${item.currency} `}</p>
            <h4>{item.foodName}</h4>
            <p className='text-sm text-secondary'>
              {item.quantity
                ? `${item.quantity?.amount} ${item.quantity?.unit}`
                : ''}
            </p>
          </div>
        </div>

        <div className='p-2'>
          <div
            role='presentation'
            className='mt-4'
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {existsInCart ? (
              <QuantityButtonGroup
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onInputChange={onInputChange}
                initValue={existsInCart.count.toString() ?? '0'}
              />
            ) : (
              <BasicButton title='Add' onClick={handleAddProduct} />
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;

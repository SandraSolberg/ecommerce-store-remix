import BasicButton from '~/components/common/atom/BasicButton/BasicButton';

import CardWrapper from '~/components/common/atom/CardWrapper/CardWrapper';
import Rating from '~/components/common/atom/Rating/Rating';
import QuantityButtonGroup from '~/components/common/molecule/QuantityButtonGroup/QuantityButtonGroup';
import useQuantity from '~/hooks/useQuantity';
import { addItem } from '~/redux/cartSlice';
import { useAppDispatch, useAppSelector } from '~/redux/store';
import { IFoodItem } from '~/types/food';

type ProductCardProps = {
  item: IFoodItem;
};

const ProductCard = ({ item }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.addedItems);
  const { onIncrement, onDecrement, onInputChange } = useQuantity();

  const handleAddProduct = () => {
    dispatch(addItem({ foodItem: item }));
  };

  const existsInCart = cartItems.find(
    (cartItem) => cartItem.foodId === item.foodId
  );

  return (
    <CardWrapper link={`/products/${item.foodId}`}>
      <div>
        <img
          className='w-full h-40 object-contain rounded-t-lg '
          alt={item.foodName ?? 'image of item'}
          src={item.image ?? undefined}
        />
        <div className='px-2 text-start'>
          <div className='flex items-center mt-2'>
            <Rating />
          </div>
          <p className='font-semibold text-blue-800 text-start'>{`${item.price.toFixed(
            2
          )} ${item.currency} `}</p>
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
              onIncrement={() => onIncrement(item)}
              onDecrement={(value: string) => onDecrement(value, item)}
              onInputChange={(value: string) => onInputChange(value, item)}
              initValue={existsInCart.count.toString() ?? '0'}
            />
          ) : (
            <BasicButton btnTitle='Add' onClick={handleAddProduct} />
          )}
        </div>
      </div>
    </CardWrapper>
  );
};

export default ProductCard;

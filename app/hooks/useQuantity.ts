import { addItem, changeNumberOfItems, removeByOne } from '~/redux/cartSlice';
import { useAppDispatch } from '~/redux/store';
import { IFoodItem } from '~/types/food';
import { useFoods } from './useFoods';
import { CartItem } from '~/types/cart';

const useQuantity = () => {
  const dispatch = useAppDispatch();
  const { foods } = useFoods();

  const getExistingFoodItem = (item: CartItem) =>
    foods?.foods.find((food) => food.foodId === item.foodId);

  const onIncrement = (item: IFoodItem) => {
    dispatch(addItem({ foodItem: item }));
  };
  const onDecrement = (value: string, item?: IFoodItem) => {
    if (item) {
      dispatch(
        removeByOne({
          foodId: item.foodId,
          originalPrice: item.price,
          currentNumber: +value,
        })
      );
    }
  };
  const onInputChange = (value: string, item?: IFoodItem) => {
    if (item) {
      dispatch(
        changeNumberOfItems({
          foodId: item.foodId,
          originalPrice: item.price,
          currentCount: +value,
        })
      );
    }
  };
  return { onIncrement, onDecrement, onInputChange, getExistingFoodItem };
};

export default useQuantity;

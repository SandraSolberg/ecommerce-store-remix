import { addItem, changeNumberOfItems, removeByOne } from '~/redux/cartSlice';
import { useAppDispatch } from '~/redux/store';
import { FoodsType, IFoodItem } from '~/types/food';
import { CartItem } from '~/types/cart';
import { useGetData } from './useGetData';
import endpoint from '~/data/constants/endpoints';

const useQuantity = () => {
  const dispatch = useAppDispatch();
  const { data: foods } = useGetData<FoodsType | null>(endpoint.FOODS);

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

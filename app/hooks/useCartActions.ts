import { removeItem } from '~/redux/cartSlice';
import { useAppDispatch, useAppSelector } from '~/redux/store';
import { setModal } from '~/redux/uiStateSlice';
import { ModalActionEnum, ModalStateType } from '~/types/types';

const useCartActions = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.addedItems);

  const productSum = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  const handleRemove = (itemId: number) => {
    dispatch(removeItem({ id: itemId }));
  };

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

  return { handleRemove, handleEmptyCart, productSum };
};

export default useCartActions;

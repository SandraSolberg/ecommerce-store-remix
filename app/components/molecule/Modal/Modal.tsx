import { useAppDispatch, useAppSelector } from '~/redux/store';
import CloseButton from '../../atom/CloseButton/CloseButton';
import { onCloseModal } from '~/redux/uiStateSlice';
import { ModalActionEnum } from '~/types/types';
import { removeAllItems } from '~/redux/cartSlice';
import ApprovalButtonGroup from '~/components/atom/ApprovalButtonGroup/ApprovalButtonGroup';
import './modal.css';

const Modal = () => {
  const dispatch = useAppDispatch();
  const uiState = useAppSelector((state) => state.uiState);
  const { modal } = uiState;

  const handleCloseModal = () => {
    dispatch(onCloseModal());
  };

  const handlePrimaryButtonClick = () => {
    if (modal?.actionType === ModalActionEnum.EmptyCart) {
      dispatch(removeAllItems());
      setTimeout(() => {
        dispatch(onCloseModal());
      }, 1000);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      handleCloseModal();
    }
  };

  return modal?.open ? (
    <>
      <div
        role='presentation'
        className='modalBackdrop'
        onClick={handleCloseModal}
      ></div>
      <dialog id='modal' className='modal' open={modal?.open}>
        <div className='p-4 text-center'>
          <div className='flex justify-end'>
            <CloseButton
              onClick={handleCloseModal}
              onHandleKeyDown={handleKeyDown}
            />
          </div>
          <div className='px-4 py-8'>
            <h1 className='mb-4'>{modal.title}</h1>
            <p>{modal.details}</p>
            <ApprovalButtonGroup
              className='mt-8'
              primaryBtnTitle={modal.primaryBtnText}
              onPrimaryBtn={handlePrimaryButtonClick}
              onSecondaryBtn={handleCloseModal}
              approvalType='negative'
            />
          </div>
        </div>
      </dialog>
    </>
  ) : null;
};

export default Modal;

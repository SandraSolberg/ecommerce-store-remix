import { toggleSlider } from '~/redux/cartSlice';
import { useAppDispatch, useAppSelector } from '~/redux/store';
import './slider.css';
import CloseButton from '~/components/atom/CloseButton/CloseButton';

const Slider = ({ children }: { children: React.ReactNode }) => {
  const isOpen = useAppSelector((state) => state.cart.isOpen);
  const dispatch = useAppDispatch();

  const handleCloseSlider = () => {
    dispatch(toggleSlider(false));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      handleCloseSlider();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          role='presentation'
          className='backdrop'
          onClick={handleCloseSlider}
        />
      )}
      <aside className='slider'>
        <div className='sliderContent'>
          <div className='sliderTop'>
            <CloseButton
              onClick={handleCloseSlider}
              onHandleKeyDown={handleKeyDown}
            />
          </div>
          {children}
        </div>
      </aside>
    </>
  );
};

export default Slider;

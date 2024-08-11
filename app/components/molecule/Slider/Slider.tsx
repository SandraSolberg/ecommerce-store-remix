import { toggleSlider } from '~/redux/cartSlice';
import { useAppDispatch, useAppSelector } from '~/redux/store';
import './slider.css';

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
        ></div>
      )}
      <aside className='slider'>
        <div className='sliderContent'>
          <div className='sliderTop'>
            <button
              tabIndex={0}
              onClick={handleCloseSlider}
              onKeyDown={handleKeyDown}
              className='hover:bg-blue-100 rounded-lg'
            >
              Close
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='var(--color-primary)'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18'></line>
                <line x1='6' y1='6' x2='18' y2='18'></line>
              </svg>
            </button>
          </div>
          {children}
        </div>
      </aside>
    </>
  );
};

export default Slider;

import { toggleSlider } from '~/redux/cartSlice';
import { useAppDispatch, useAppSelector } from '~/redux/store';
import './slider.css';

const Slider = ({ children }: { children: React.ReactNode }) => {
  const isOpen = useAppSelector((state) => state.cart.isOpen);
  const dispatch = useAppDispatch();

  const handleCloseSlider = () => {
    dispatch(toggleSlider(false));
  };

  return (
    <>
      {isOpen && (
        <div
          role='button'
          tabIndex={0}
          className='backdrop'
          onClick={handleCloseSlider}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleCloseSlider();
            }
          }}
        ></div>
      )}
      <aside className='slider'>
        <div className='sliderContent'>
          <div className='sliderTop'>
            <button
              onClick={handleCloseSlider}
              className='hover:bg-blue-025 rounded-lg'
            >
              Close
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#061629'
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

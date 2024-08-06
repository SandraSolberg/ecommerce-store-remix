import { toggleSlider } from '~/redux/cartSlice';
import { useAppDispatch, useAppSelector } from '~/redux/store';
import './slider.css';

const Slider = () => {
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
            <button onClick={handleCloseSlider}>
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

          <div className='sliderNoContent'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#1767ce'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0' />
            </svg>
            <div>
              <h3>Time to start shopping!</h3>
              <p>Fill it up with items for your taco</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Slider;

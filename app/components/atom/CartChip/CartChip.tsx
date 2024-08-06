import { useState } from 'react';

export const CartChip = () => {
  const [open, setOpen] = useState(false);

  const handleOpenSlider = () => {
    console.log('todo. Open Slider');
    setOpen(!open);
  };

  return (
    <div
      role='button'
      tabIndex={0}
      className='flex gap-2 border-solid border rounded-lg border-blue-030 hover:bg-blue-025 p-2'
      onClick={handleOpenSlider}
      onKeyDown={handleOpenSlider}
    >
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
        <circle cx='10' cy='20.5' r='1' />
        <circle cx='18' cy='20.5' r='1' />
        <path d='M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1' />
      </svg>
      <p>kr 0.00</p>
      {open ? (
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
          <path d='M18 15l-6-6-6 6' />
        </svg>
      ) : (
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
          <path d='M15 18l-6-6 6-6' />
        </svg>
      )}
    </div>
  );
};

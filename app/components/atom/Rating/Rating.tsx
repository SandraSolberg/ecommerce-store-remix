import { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div
      className='flex items-center mt-2'
      role='presentation'
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {[...Array(5)].map((_star, index) => {
        index += 1;
        return (
          <button
            type='button'
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => {
              setRating(index);
              setCount(index);
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill={`${(hover || rating) >= index ? '#eab308' : 'none'} `}
                stroke={`${
                  (hover || rating) >= index ? '#eab308' : '#9ca3af'
                } `}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
              </svg>
            </span>
          </button>
        );
      })}
      <span className='text-gray-500 text-sm md:text-base ml-1'>{`(${count})`}</span>
    </div>
  );
};

export default Rating;

import { useState } from 'react';
import SVGIcon from '../SVGIcon/SVGIcon';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div
      className='flex items-center my-2'
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
            onClick={() => {
              setRating(index);
              setCount(index);
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span>
              <SVGIcon
                fill={`${index <= (hover || rating) ? '#eab308' : 'none'} `}
                stroke={`${
                  index <= (hover || rating) ? '#eab308' : '#9ca3af'
                } `}
              >
                <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
              </SVGIcon>
            </span>
          </button>
        );
      })}
      <span className='text-gray-500 text-sm md:text-base ml-1'>{`(${count})`}</span>
    </div>
  );
};

export default Rating;

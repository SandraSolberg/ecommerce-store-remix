import { useState } from 'react';
import SVGIcon from '../SVGIcon/SVGIcon';

type HeartButtonProps = {
  size?: number;
  filled?: boolean;
  onFill: (fill: boolean) => void;
  isRed?: boolean;
};

const HeartButton = ({
  size = 20,
  filled = false,
  onFill,
  isRed = false,
}: HeartButtonProps) => {
  const [hasLiked, setHasLiked] = useState(filled ?? false);

  return (
    <div>
      <button
        className={`p-2 rounded-full ${
          isRed ? 'hover:bg-red-200' : 'hover:bg-gray-200 '
        }`}
        onClick={() => {
          onFill(!hasLiked);
          setHasLiked(!hasLiked);
        }}
      >
        <SVGIcon
          fill={hasLiked ? (isRed ? '#991b1b' : '#061629') : 'none'}
          stroke={isRed ? '#991b1b' : '#061629'}
          width={size}
          height={size}
        >
          <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
        </SVGIcon>
      </button>
    </div>
  );
};

export default HeartButton;

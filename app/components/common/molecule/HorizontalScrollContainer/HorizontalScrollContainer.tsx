import { ReactNode, useRef } from 'react';
import SVGIcon from '~/components/common/atom/SVGIcon/SVGIcon';
import './horizontalScrollContainer.css';

const HorizontalScrollContainer = ({ children }: { children: ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const onScroll = (direction: string) => {
    if (scrollRef.current) {
      if (direction === 'left') {
        scrollRef.current.scrollLeft -= 200;
      } else if (direction === 'right') {
        scrollRef.current.scrollLeft += 200;
      }
    }
    return null;
  };

  const scrollWidth = scrollRef.current?.scrollWidth;

  console.log('scrollWidth', scrollWidth, window.scrollX);

  return (
    <div className='flex items-center justify-center container'>
      <div className='mr-2'>
        <button
          onClick={() => onScroll('left')}
          className='bg-blue-200 p-3 rounded-full hover:bg-blue-300'
        >
          <SVGIcon height='24' width='24' stroke='var(--color-blue-600)'>
            <path d='M19 12H6M12 5l-7 7 7 7' />
          </SVGIcon>
        </button>
      </div>

      <div className='flex overflow-x-scroll ' ref={scrollRef}>
        {children}
      </div>
      <div className='ml-2'>
        <button
          onClick={() => onScroll('right')}
          className='bg-blue-200 p-3 rounded-full hover:bg-blue-300'
        >
          <SVGIcon height='24' width='24' stroke='var(--color-blue-600)'>
            <path d='M5 12h13M12 5l7 7-7 7' />
          </SVGIcon>
        </button>
      </div>
    </div>
  );
};

export default HorizontalScrollContainer;

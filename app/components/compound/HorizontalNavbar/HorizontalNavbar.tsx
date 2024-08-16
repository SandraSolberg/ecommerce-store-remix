import { Link } from '@remix-run/react';
import SVGIcon from '~/components/atom/SVGIcon/SVGIcon';

const HorizontalNavbar = () => {
  return (
    <nav className='flex items-center justify-between bg-white border-t border-border-divider px-8 py-4'>
      <div>
        <button className='flex items-center font-semibold gap-2'>
          <SVGIcon>
            <>
              <rect x='3' y='3' width='7' height='7'></rect>
              <rect x='14' y='3' width='7' height='7'></rect>
              <rect x='14' y='14' width='7' height='7'></rect>
              <rect x='3' y='14' width='7' height='7'></rect>
            </>
          </SVGIcon>
          Categories
          <SVGIcon>
            <path d='M6 9l6 6 6-6' />
          </SVGIcon>
        </button>
      </div>
      <div>
        <Link to='login'>Sign in</Link>
      </div>
    </nav>
  );
};

export default HorizontalNavbar;

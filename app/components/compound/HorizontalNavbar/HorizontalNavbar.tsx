import { Link } from '@remix-run/react';
import SVGIcon from '~/components/atom/SVGIcon/SVGIcon';

const HorizontalNavbar = () => {
  return (
    <nav>
      <div>
        <button>
          <SVGIcon>
            <>
              <rect x='3' y='3' width='7' height='7'></rect>
              <rect x='14' y='3' width='7' height='7'></rect>
              <rect x='14' y='14' width='7' height='7'></rect>
              <rect x='3' y='14' width='7' height='7'></rect>
            </>
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

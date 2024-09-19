import { Link } from '@remix-run/react';
import { CartChip } from '~/components/atom/CartChip/CartChip';
import MiniCartContent from '~/components/modules/Cart/MiniCartContent/MiniCartContent';
import Slider from '~/components/molecule/Slider/Slider';
import { useAppSelector } from '~/redux/store';

const Header = () => {
  const isOpen = useAppSelector((state) => state.cart.isOpen);
  return (
    <header className='bg-white'>
      {isOpen ? (
        <Slider>
          <MiniCartContent />
        </Slider>
      ) : null}
      <div className='flex justify-between items-center py-2 px-6'>
        <Link to=''>
          <img src='/images/taco.svg' alt='Go to dashboard' />
        </Link>

        <CartChip />
      </div>
    </header>
  );
};

export default Header;

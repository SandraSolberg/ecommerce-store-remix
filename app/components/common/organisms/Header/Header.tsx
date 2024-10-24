import { Link } from '@remix-run/react';
import { CartChip } from '~/components/common/atom/CartChip/CartChip';
import MiniCartContent from '~/components/modules/Cart/MiniCartContent/MiniCartContent';
import Slider from '~/components/common/molecule/Slider/Slider';
import { useAppSelector } from '~/redux/store';
import HeartButton from '../../atom/HeartButton/HeartButton';

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

        <div className='flex gap-4'>
          <HeartButton size={24} onClick={() => {}} />

          <CartChip />
        </div>
      </div>
    </header>
  );
};

export default Header;

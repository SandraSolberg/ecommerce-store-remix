import { CartChip } from '~/components/atom/CartChip/CartChip';
import MiniCartContent from '~/components/molecule/MiniCartContent/MiniCartContent';
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
      <div className='flex  justify-between items-center py-2 px-4'>
        <a href='https://www.sandrasolberg.no/'>
          <img
            className='w-20 h-20'
            src='/tacoshop.svg'
            alt={`Visit Sandra's website`}
          />
        </a>

        <div>
          <CartChip />
        </div>
      </div>
    </header>
  );
};

export default Header;

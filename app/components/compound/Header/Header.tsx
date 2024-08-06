import { CartChip } from '~/components/atom/CartChip/CartChip';

const Header = () => {
  return (
    <header className='bg-white'>
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

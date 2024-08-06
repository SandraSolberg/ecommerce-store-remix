import { CartChip } from '~/components/atom/CartChip/CartChip';

const Header = () => {
  return (
    <header className='bg-white'>
      <div className='flex  justify-between items-center py-2 px-4'>
        <a href='https://www.linkedin.com/in/sandra-solberg-54b13013b/edit/forms/next-action/shareable-trigger-new-certification/?profileEntityUnion=(certificationUrn%3Aurn%253Ali%253Afsd_profileCertification%253A%2528ACoAACIDMgsBcH1hFkx6-I7NNJW_3yrVh7sZdLs%252C2023552028%2529)'>
          <img
            className='w-16 h-16'
            src='/linkedin-square.svg'
            alt={`Visit Sandra's linkedin profile`}
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

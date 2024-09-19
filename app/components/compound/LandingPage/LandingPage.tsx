import PageWrapper from '~/components/atom/PageWrapper/PageWrapper';
import ProductContainer from '../../modules/Product/ProductContainer/ProductContainer';
import '~/styles/layout.css';

const LandingPage = () => {
  return (
    <main className='font-sans '>
      <PageWrapper title='Welcome to TacoShop'>
        <ProductContainer />
      </PageWrapper>
    </main>
  );
};

export default LandingPage;

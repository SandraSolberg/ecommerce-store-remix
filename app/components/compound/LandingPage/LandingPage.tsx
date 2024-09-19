import ProductContainer from '../ProductContainer/ProductContainer';
import '~/styles/layout.css';

const LandingPage = () => {
  return (
    <main className='font-sans '>
      <div className='layout p-4'>
        <h1>Welcome to TacoShop</h1>
        <ProductContainer />
      </div>
    </main>
  );
};

export default LandingPage;

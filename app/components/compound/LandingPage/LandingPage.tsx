import ProductContainer from '../ProductContainer/ProductContainer';
import '~/styles/layout.css';

const LandingPage = () => {
  return (
    <main className='font-sans p-4 '>
      <div className='layout'>
        <h1 className='text-3xl'>Welcome to TacoShop</h1>
        <ProductContainer />
      </div>
    </main>
  );
};

export default LandingPage;

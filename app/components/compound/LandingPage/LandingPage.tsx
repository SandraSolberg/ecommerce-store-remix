import Modal from '~/components/molecule/Modal/Modal';
import ProductContainer from '../ProductContainer/ProductContainer';

const LandingPage = () => {
  return (
    <main className='font-sans p-4 '>
      <div className='layout'>
        <Modal />
        <h1 className='text-3xl'>Welcome to TacoShop</h1>
        <ProductContainer />
      </div>
    </main>
  );
};

export default LandingPage;

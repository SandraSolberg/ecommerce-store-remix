import ProductContainer from '../ProductContainer/ProductContainer';

const LandingPage = () => {
  return (
    <main className='font-sans p-4 '>
      <section>
        <div className='layout'>
          <h1 className='text-3xl'>Welcome to TacoShop</h1>
          <ProductContainer />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;

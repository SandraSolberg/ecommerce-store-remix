import { useAppSelector } from '~/redux/store';
import ProductContainer from '../ProductContainer/ProductContainer';
import Slider from '~/components/molecule/Slider/Slider';
import MiniCartContent from '~/components/molecule/MiniCartContent/MiniCartContent';

const LandingPage = () => {
  const isOpen = useAppSelector((state) => state.cart.isOpen);

  return (
    <main className='font-sans p-4 '>
      {isOpen ? (
        <Slider>
          <MiniCartContent />
        </Slider>
      ) : null}
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

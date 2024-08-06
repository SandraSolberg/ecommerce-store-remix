import ProductCard from '~/components/molecule/ProductCard/ProductCard';
import { useFoods } from '~/hooks/useFoods';
import { useAppSelector } from '~/redux/store';

const ProductContainer = () => {
  const cart = useAppSelector((state) => state.cart.items);

  console.log('cart', cart);

  const { foods, loading, error } = useFoods();

  return (
    <div>
      <h2 className='text-2xl'>Available items: {foods?.foods.length ?? 0}</h2>
      <div className='flex flex-wrap'>
        {loading && <p className='text-xl'>...Loading</p>}
        {error && <h3 className='text-xl'>Not able to display any items</h3>}
        {foods &&
          foods.foods.map((item) => (
            <div key={item.foodId}>
              <ProductCard item={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductContainer;

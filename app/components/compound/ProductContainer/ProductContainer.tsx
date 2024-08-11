import ProductCard from '~/components/molecule/ProductCard/ProductCard';
import { useFoods } from '~/hooks/useFoods';

const ProductContainer = () => {
  const { foods, loading, error } = useFoods();
  return (
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
  );
};

export default ProductContainer;

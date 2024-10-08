import ProductCard from '~/components/modules/Product/ProductCard/ProductCard';
import SkeletonContainer from './SkeletonContainer';
import { useGetData } from '~/hooks/useGetData';
import { FoodsType } from '~/types/food';
import endpoint from '~/data/constants/endpoints';

const ProductContainer = ({ foodGroupId }: { foodGroupId?: string }) => {
  const {
    data: foods,
    isLoading,
    error,
  } = useGetData<FoodsType | null>(endpoint.FOODS);

  const filteredByGroup = foodGroupId
    ? foods?.foods.filter(
        (food) => food.foodGroupId.split('.')[0] === foodGroupId
      )
    : undefined;

  const foodsToMap = foodGroupId ? filteredByGroup : foods?.foods;
  const numberOfItems = foodsToMap ? foodsToMap.length : 0;

  return (
    <>
      <h2>{numberOfItems} items</h2>
      {isLoading && <SkeletonContainer />}
      <div className='flex flex-wrap'>
        {error && <h3 className='text-xl'>Not able to display any items</h3>}
        {foodsToMap?.map((item) => (
          <div key={item.foodId}>
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductContainer;

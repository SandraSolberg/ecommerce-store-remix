import { useParams } from '@remix-run/react';
import ProductContainer from '~/components/compound/ProductContainer/ProductContainer';
import { useFoodsCategories } from '~/hooks/useFoodCategories';

const CategoryPage = () => {
  const { name } = useParams();
  const { groups } = useFoodsCategories();

  const currentCategory = groups?.foodGroups?.find(
    (group) => group.slug === name
  );

  const currentCategoryName = currentCategory?.name ?? 'unknown ';

  return (
    <div className='layout p-4'>
      <h1>{currentCategoryName}</h1>
      <ProductContainer foodGroupId={currentCategory?.foodGroupId} />
    </div>
  );
};

export default CategoryPage;

import { useParams } from '@remix-run/react';
import PageWrapper from '~/components/atom/PageWrapper/PageWrapper';
import ProductContainer from '~/components/modules/Product/ProductContainer/ProductContainer';
import { useFoodsCategories } from '~/hooks/useFoodCategories';

const CategoryPage = () => {
  const { name } = useParams();
  const { groups } = useFoodsCategories();

  const currentCategory = groups?.foodGroups?.find(
    (group) => group.slug === name
  );

  const currentCategoryName = currentCategory?.name ?? 'unknown ';

  return (
    <PageWrapper title={currentCategoryName}>
      <ProductContainer foodGroupId={currentCategory?.foodGroupId} />
    </PageWrapper>
  );
};

export default CategoryPage;

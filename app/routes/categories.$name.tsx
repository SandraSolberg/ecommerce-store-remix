import { useParams } from '@remix-run/react';
import PageWrapper from '~/components/common/atom/PageWrapper/PageWrapper';
import ProductContainer from '~/components/modules/Product/ProductContainer/ProductContainer';
import endpoint from '~/data/constants/endpoints';
import { useGetData } from '~/hooks/useGetData';
import { FoodGroupsType } from '~/types/food';

const CategoryPage = () => {
  const { name } = useParams();
  const { data: groups } = useGetData<FoodGroupsType>(endpoint.FOODGROUPS);

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

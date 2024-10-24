import { useParams } from '@remix-run/react';
import CardPageWrapper from '~/components/common/atom/CardPageWrapper/CardPageWrapper';
import NotFound from '~/components/common/atom/NotFound/NotFound';
import endpoint from '~/data/constants/endpoints';
import { useGetData } from '~/hooks/useGetData';
import { RecipesGroupsType } from '~/types/recipes';

const RecipesDetails = () => {
  const { name } = useParams();
  const { data } = useGetData<RecipesGroupsType>(endpoint.RECIPES);

  const recipe = data ? data.recipes.find((r) => r.slug === name) : null;

  return (
    <CardPageWrapper>
      {recipe ? <h1 className='pb-2'>{recipe.name}</h1> : <NotFound />}
    </CardPageWrapper>
  );
};

export default RecipesDetails;

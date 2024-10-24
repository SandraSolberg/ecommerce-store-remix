import PageWrapper from '~/components/common/atom/PageWrapper/PageWrapper';
import RecipeCard from '~/components/modules/Recipe/RecipeCard/RecipeCard';
import endpoint from '~/data/constants/endpoints';
import { useGetData } from '~/hooks/useGetData';
import { RecipesGroupsType } from '~/types/recipes';

const Recipes = () => {
  const { data } = useGetData<RecipesGroupsType>(endpoint.RECIPES);
  return (
    <PageWrapper title='Recipes'>
      <div className='flex flex-wrap'>
        {data &&
          data.recipes.map((recipe) => (
            <div key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
      </div>
    </PageWrapper>
  );
};

export default Recipes;

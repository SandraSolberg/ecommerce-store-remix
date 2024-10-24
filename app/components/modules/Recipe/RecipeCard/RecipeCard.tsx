import CardWrapper from '~/components/common/atom/CardWrapper/CardWrapper';
import Rating from '~/components/common/atom/Rating/Rating';
import { RecipesType } from '~/types/recipes';

const RecipeCard = ({ recipe }: { recipe: RecipesType }) => {
  return (
    <CardWrapper
      link={`/recipes/${recipe.slug}`}
      className='min-w-[18rem] md:min-w-[21rem] p-0'
    >
      <div>
        <img
          className='w-full h-60 object-cover rounded-t-lg '
          alt={recipe.name ?? 'image of item'}
          src={recipe.imageUrl ?? undefined}
        />
        <div className='p-4'>
          <h4>{recipe.name}</h4>
          <Rating />
          <div className='flex gap-2 mt-6'>
            <span className='bg-gray-100 rounded-full py-1 px-2'>
              {recipe.difficulty}
            </span>
            <span className='bg-gray-100 rounded-full py-1 px-2'>
              {recipe.prepTimeMinutes} min
            </span>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default RecipeCard;

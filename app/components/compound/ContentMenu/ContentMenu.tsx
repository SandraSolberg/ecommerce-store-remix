import { useFoodsCategories } from '~/hooks/useFoodCategories';
import { GroupType } from '~/types/food';
import './contentMenu.css';

const ContentMenu = () => {
  const { groups } = useFoodsCategories();

  const parentCategories: GroupType[] | null = groups?.foodGroups
    ? groups?.foodGroups.filter((obj) => !obj.parentId)
    : null;

  return (
    <div className='bg-white absolute w-full border border-y-gray-400 flex flex-col py-6 '>
      <div className='max-w-[1400px] m-auto'>
        <button className='hover:underline px-2 pb-2 font-semibold'>
          Show all products
        </button>

        <ul className='list'>
          {parentCategories?.map((category) => (
            <li key={category.foodGroupId}>
              <button>{category.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentMenu;

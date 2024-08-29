import { useFoodsCategories } from '~/hooks/useFoodCategories';
import { GroupType } from '~/types/food';
import './contentMenu.css';

const ContentMenu = () => {
  const { groups } = useFoodsCategories();

  const parentCategories: GroupType[] | null = groups?.foodGroups
    ? groups?.foodGroups.filter((obj) => !obj.parentId)
    : null;

  return (
    <div className='bg-white absolute w-full border border-y-gray-400 flex flex-col p-6'>
      <ul>
        <li className='px-2 pb-2 font-semibold'>
          <button className='hover:underline'>Show all products</button>
        </li>
      </ul>
      <ul className='list'>
        {parentCategories?.map((category) => (
          <li key={category.foodGroupId}>
            <button>{category.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentMenu;

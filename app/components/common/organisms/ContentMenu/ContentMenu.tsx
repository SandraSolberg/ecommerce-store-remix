import { FoodGroupsType, GroupType } from '~/types/food';
import { Link } from '@remix-run/react';
import urlConstants from '~/data/constants/urls';
import { useGetData } from '~/hooks/useGetData';
import './contentMenu.css';
import endpoint from '~/data/constants/endpoints';

const ContentMenu = () => {
  const { data: groups } = useGetData<FoodGroupsType>(endpoint.FOODGROUPS);

  const parentCategories: GroupType[] | null = groups?.foodGroups
    ? groups?.foodGroups.filter((obj) => !obj.parentId)
    : null;

  return (
    <div className='bg-white absolute w-full border border-y-gray-400 flex flex-col items-center py-6 z-50'>
      {groups && (
        <div className='md:max-w-[1200px] px-4'>
          <Link
            to={urlConstants.PRODUCTS}
            className='hover:underline pb-2 font-semibold'
          >
            Show all products
          </Link>

          <ul className='list'>
            {parentCategories
              ?.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
              ?.map((category) => (
                <li key={category.foodGroupId}>
                  <Link to={`${urlConstants.CATEGORY}/${category.slug}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContentMenu;

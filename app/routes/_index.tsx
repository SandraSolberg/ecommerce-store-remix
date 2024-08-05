import type { MetaFunction } from '@remix-run/node';
import { useFoods } from '~/hooks/useFoods';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const { foods } = useFoods();
  console.log(
    'foods',
    foods ? foods.foods.map((item) => item.foodName) : 'no foods'
  );
  return (
    <div className='font-sans p-4'>
      <h1 className='text-3xl'>Welcome to Remix</h1>
      <ul className='list-disc mt-4 pl-6 space-y-2'>
        <li>
          <a
            className='text-blue-700 underline visited:text-purple-900'
            target='_blank'
            href='https://remix.run/start/quickstart'
            rel='noreferrer'
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className='text-blue-700 underline visited:text-purple-900'
            target='_blank'
            href='https://remix.run/start/tutorial'
            rel='noreferrer'
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className='text-blue-700 underline visited:text-purple-900'
            target='_blank'
            href='https://remix.run/docs'
            rel='noreferrer'
          >
            Remix Docs
          </a>
        </li>
      </ul>
      <h2 className='text-2xl'>Available items: {foods?.foods.length ?? 0}</h2>
      <div className='flex flex-wrap'>
        {foods ? (
          foods.foods.map((item) => (
            <div key={item.foodId} className='w-40 h-80'>
              <p>{item.foodName}</p>
              <img
                className='w-full max-w-xs md:max-w-sm lg:max-w-md'
                alt={item.foodName ?? 'image of item'}
                src={item.image ?? undefined}
                sizes='(max-width: 160px) 140px, 140px'
                srcSet={`${item.image} 180w, ${item.image} 160w, ${item.image} 140w`}
              />
            </div>
          ))
        ) : (
          <h3 className='text-xl'>Not able to display any items</h3>
        )}
      </div>
    </div>
  );
}

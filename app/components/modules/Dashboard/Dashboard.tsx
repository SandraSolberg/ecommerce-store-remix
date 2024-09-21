import { Link } from '@remix-run/react';
import PageWrapper from '~/components/atom/PageWrapper/PageWrapper';
import HorizontalScrollContainer from '~/components/molecule/HorizontalScrollContainer/HorizontalScrollContainer';
import { useFoods } from '~/hooks/useFoods';
import '~/styles/layout.css';
import ProductCard from '../Product/ProductCard/ProductCard';

const Dashboard = () => {
  const { foods } = useFoods();

  // get 10 newest items if list is bigger than 10
  // if list is less than or equal to 10 show every item
  // if there is no items hide this

  const newestFoodItems =
    foods && foods.foods.length >= 10
      ? foods?.foods
          .sort((a, b) =>
            new Date(a.createdAt) < new Date(b.createdAt)
              ? -1
              : new Date(a.createdAt) > new Date(b.createdAt)
              ? 1
              : 0
          )
          .reverse()
          .slice(0, 10)
      : foods && foods.foods.length > 0
      ? foods?.foods
          .sort((a, b) =>
            new Date(a.createdAt) < new Date(b.createdAt)
              ? -1
              : new Date(a.createdAt) > new Date(b.createdAt)
              ? 1
              : 0
          )
          .reverse()
          .slice(0, foods.foods.length)
      : null;

  return (
    <main className='font-sans '>
      <PageWrapper title='Welcome to TacoShop'>
        <section className='flex flex-col-reverse md:flex-row justify-between bg-white rounded-xl '>
          <div className='flex-1 basis-1/2m p-8 space-y-6'>
            <h2>Get Inspired by Norwegian Tacos</h2>
            <p>
              In many Norwegian homes, Friday night signals the start of the
              weekend with a delicious, communal meal called{' '}
              <Link to='/products'>Taco Fridays!</Link> Perfect for winding down
              after a long week, tacos let everyone at the table create their
              own perfect bite.
            </p>

            <div className='w-fit'>
              <Link
                className='px-5 py-3 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:no-underline'
                to='/products'
              >
                Explore our products
              </Link>
            </div>
          </div>

          <div>
            <img
              loading='lazy'
              className='h-full w-full rounded-t-lg md:rounded-none md:rounded-r-lg'
              src='/images/independent-grocery-store.jpg'
              alt={`Go to dashboard`}
            />
          </div>
        </section>
        <section className='bg-white p-8 rounded-lg text-center space-y-6'>
          <h2>Get Inspired by Norwegian Tacos</h2>

          <p>
            Get Inspired by Norwegian Tacos: A Unique Twist on a Classic
            Favorite
          </p>
        </section>
        {foods && (
          <section className='bg-white p-8 rounded-lg text-center space-y-6'>
            <h2>Discover Our Newest Additions</h2>
            <HorizontalScrollContainer>
              {newestFoodItems?.map((item) => (
                <div key={item.foodId}>
                  <ProductCard item={item} />
                </div>
              ))}
            </HorizontalScrollContainer>
          </section>
        )}
      </PageWrapper>
    </main>
  );
};

export default Dashboard;

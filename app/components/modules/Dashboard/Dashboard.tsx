import { Link } from '@remix-run/react';
import BasicButton from '~/components/atom/BasicButton/BasicButton';
import PageWrapper from '~/components/atom/PageWrapper/PageWrapper';
import '~/styles/layout.css';

const Dashboard = () => {
  return (
    <main className='font-sans '>
      <PageWrapper title='Welcome to TacoShop'>
        <section className='grid grid-cols-2 gap-4'>
          <div className='space-y-4'>
            <h2>Get Inspired by Norwegian Tacos</h2>
            <div className='space-y-2'>
              <p>
                In many Norwegian homes, Friday night signals the start of the
                weekend with a delicious, communal meal called{' '}
                <Link to='/products'>Taco Fridays!</Link> Perfect for winding
                down after a long week, tacos let everyone at the table create
                their own perfect bite.
              </p>

              <p>
                We’ve got everything you need for a perfect dinner from full
                recipes to products that let you customize your own tacos
                exactly the way you like!
              </p>
            </div>

            <div className='w-fit'>
              <BasicButton title='Explore our products' className='px-5 py-3' />
            </div>
          </div>

          <div className=''>
            <img
              className='w-auto h-auto max-w-96 max-h-96m md:max-w-full md:max-h-full'
              src='/images/ecommerce-campaign-rafiki.svg'
              alt={`Go to dashboard`}
            />
          </div>
        </section>
        <section className='bg-off-white'>
          <h2>Get Inspired by Norwegian Tacos</h2>
          <p>
            Get Inspired by Norwegian Tacos: A Unique Twist on a Classic
            Favorite
          </p>
        </section>
        <section className='bg-off-white'>
          <h2>Discover Our Newest Additions</h2>
          <p>Some text</p>
        </section>
      </PageWrapper>
    </main>
  );
};

export default Dashboard;

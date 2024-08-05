import type { MetaFunction } from '@remix-run/node';
import ProductContainer from '~/components/compound/ProductContainer/ProductContainer';
import '../styles/layout.css';

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix Grocery Store' },
    { name: 'description', content: 'Welcome to my Grocery Store !' },
  ];
};

export default function Index() {
  return (
    <main className='font-sans p-4'>
      <h1 className='text-3xl'>Welcome to my Grocery Store !</h1>
      <section>
        <div className='layout'>
          <ProductContainer />
        </div>
      </section>
    </main>
  );
}

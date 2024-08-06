import type { MetaFunction } from '@remix-run/node';
import ProductContainer from '~/components/compound/ProductContainer/ProductContainer';
import { Provider } from 'react-redux';
import Header from '~/components/compound/Header/Header';
import '../styles/layout.css';
import { store } from '~/redux/store';

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix Grocery Store' },
    { name: 'description', content: 'Welcome to my Grocery Store !' },
  ];
};

export default function Index() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <main className='font-sans p-4 '>
          <h1 className='text-3xl'>Welcome to TacoShop !</h1>
          <section>
            <div className='layout'>
              <ProductContainer />
            </div>
          </section>
        </main>
      </Provider>
    </div>
  );
}

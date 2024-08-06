import type { MetaFunction } from '@remix-run/node';
import { Provider } from 'react-redux';
import Header from '~/components/compound/Header/Header';
import '../styles/layout.css';
import { store } from '~/redux/store';
import LandingPage from '~/components/compound/LandingPage/LandingPage';

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
        <LandingPage />
      </Provider>
    </div>
  );
}

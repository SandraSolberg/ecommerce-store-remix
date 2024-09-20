import type { MetaFunction } from '@remix-run/node';
import Dashboard from '~/components/modules/Dashboard/Dashboard';
import '../styles/layout.css';

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix Grocery Store' },
    { name: 'description', content: 'Welcome to my Grocery Store !' },
  ];
};

export default function Index() {
  return <Dashboard />;
}

import { LoaderFunction, redirect } from '@remix-run/node';

export const loader: LoaderFunction = async () => redirect('/products');

const Categories = () => {
  return <div>Categories</div>;
};

export default Categories;

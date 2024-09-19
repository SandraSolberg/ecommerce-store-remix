import PageWrapper from '~/components/atom/PageWrapper/PageWrapper';
import ProductContainer from '~/components/compound/ProductContainer/ProductContainer';

const Products = () => {
  return (
    <PageWrapper>
      <h1 className='text-3xl'>Products</h1>
      <ProductContainer />
    </PageWrapper>
  );
};

export default Products;

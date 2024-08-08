import { useParams } from '@remix-run/react';
import PageWrapper from '~/components/atom/PageWrapper/PageWrapper';

const ProductDetails = () => {
  const { productId } = useParams();
  console.log('productID', productId);
  return (
    <PageWrapper>
      <h1 className='text-3xl'>Products Detail</h1>
      <p>test</p>
    </PageWrapper>
  );
};

export default ProductDetails;

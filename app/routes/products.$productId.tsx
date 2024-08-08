import { useParams } from '@remix-run/react';
import { DetailsPage } from '~/components/compound/DetailsPage/DetailsPage';

const ProductDetails = () => {
  const { productId } = useParams();

  const numberProductId = productId ? +productId : null;

  return <DetailsPage productId={numberProductId} />;
};

export default ProductDetails;

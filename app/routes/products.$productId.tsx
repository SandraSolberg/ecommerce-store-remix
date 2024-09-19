import { useParams } from '@remix-run/react';
import { DetailsPage } from '~/components/modules/Product/DetailsPage/DetailsPage';

const ProductDetails = () => {
  const { productId } = useParams();

  const numberProductId = productId ? +productId : null;

  return <DetailsPage productId={numberProductId} />;
};

export default ProductDetails;

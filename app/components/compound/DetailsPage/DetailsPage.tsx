import PageWrapper from '~/components/atom/PageWrapper/PageWrapper';
import { useFoods } from '~/hooks/useFoods';

export const DetailsPage = ({ productId }: { productId: number | null }) => {
  const { foods } = useFoods();

  console.log('productID', productId, foods);

  const product = foods?.foods.find((item) => item.foodId === productId);

  return (
    <PageWrapper>
      {product ? (
        <div className='flex'>
          <img
            className='max-w-lg max-h-lg object-contain'
            alt=''
            src={product.image ?? ''}
          />
          <div>
            <p>{product.label}</p>
            <h1>{product.foodName}</h1>
            <p>
              {product.quantity?.amount} {product.quantity?.unit}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </PageWrapper>
  );
};

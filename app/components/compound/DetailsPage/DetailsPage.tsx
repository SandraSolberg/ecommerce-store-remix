import { Accordion } from '~/components/atom/Accordion/Accordion';
import BasicButton from '~/components/atom/BasicButton/BasicButton';
import PageWrapper from '~/components/atom/PageWrapper/PageWrapper';
import { useFoods } from '~/hooks/useFoods';
import { addItem } from '~/redux/cartSlice';
import { useAppDispatch } from '~/redux/store';
import numberToFixedString from '~/utils/numberToFixedString';

export const DetailsPage = ({ productId }: { productId: number | null }) => {
  const { foods } = useFoods();
  const dispatch = useAppDispatch();

  const product = foods?.foods.find((item) => item.foodId === productId);

  const {
    foodName,
    image,
    quantity,
    price,
    currency,
    description,
    allergens,
    link,
    supplier,
  } = product ?? {};

  const displayPrice =
    price && currency ? `${currency} ${numberToFixedString(price)} ` : '';

  const handleAddProduct = () => {
    if (product) {
      dispatch(addItem({ foodItem: product }));
    }
  };

  return (
    <PageWrapper>
      {product ? (
        <div className='flex flex-col gap-5'>
          <div className='flex'>
            <img
              className='max-w-lg max-h-lg object-contain p-4'
              alt=''
              src={image ?? ''}
            />
            <div>
              <div className='pb-8'>
                <h1 className='pb-2'>{foodName}</h1>
                <p className='flex flex-row text-secondary text-xl md:text-2xl'>
                  {quantity?.amount} {quantity?.unit}, {supplier}
                </p>
              </div>

              <span className='text-3xl md:text-4xl font-bold'>
                {displayPrice}
              </span>
              <BasicButton
                className='py-3 px-5'
                title='Add to cart'
                onClick={handleAddProduct}
              />
            </div>
          </div>

          <div>
            <Accordion title='Description'>
              <p>{description}</p>
            </Accordion>

            <Accordion title='Content'>
              <p>test</p>
            </Accordion>
          </div>

          <div className='flex justify-center'>
            {link && (
              <a
                href={link}
                className='flex items-center gap-1 hover:underline'
              >
                Read more about the product
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke={'var(--color-blue-080)'}
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M5 12h13M12 5l7 7-7 7' />
                </svg>
              </a>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h1>No product found</h1>
        </div>
      )}
    </PageWrapper>
  );
};

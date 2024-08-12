import { Accordion } from '~/components/atom/Accordion/Accordion';
import BasicButton from '~/components/atom/BasicButton/BasicButton';
import InfoTable from '~/components/atom/InfoTable/InfoTable';
import PageWrapper from '~/components/atom/PageWrapper/PageWrapper';
import QuantityButtonGroup from '~/components/atom/QuantityButtonGroup/QuantityButtonGroup';
import { useFoods } from '~/hooks/useFoods';
import { addItem } from '~/redux/cartSlice';
import { useAppDispatch } from '~/redux/store';
import { KeyValuePair } from '~/types/types';
import arrayToJoinedString from '~/utils/arrayToJoinedString';
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
    link,
    supplier,
    label,
    origin,
    countryOfProduction,
    allergens,
    storage,
    nutrients,
    calories,
    energy,
  } = product ?? {};

  const displayPrice =
    price && currency ? `${currency} ${numberToFixedString(price)} ` : '';

  const handleAddProduct = () => {
    if (product) {
      dispatch(addItem({ foodItem: product }));
    }
  };

  const allergensJoined = arrayToJoinedString(allergens);
  const nutrientsJoined = arrayToJoinedString(nutrients);

  const contentList: KeyValuePair[] = [
    { Supplier: supplier ?? '' },
    { Label: label ?? '' },
    { Origin: origin ?? '' },
    { 'Country of Production': countryOfProduction ?? '' },
    { Allergens: allergensJoined },
    { Storage: storage },
  ];

  const nutrientsList: KeyValuePair[] = [
    { Energy: energy ? `${energy.quantity} ${energy.unit}` : '' },
    { Calories: calories ? `${calories.quantity} ${calories.unit}` : '' },
    { Nutrients: nutrientsJoined },
  ];

  // Related section?

  return (
    <PageWrapper>
      {product ? (
        <div className='flex gap-5 md:flex flex-col'>
          <div className='md:flex'>
            <div className='p-4 flex-1 flex justify-center items-center'>
              <img
                className='object-contain md:max-w-96 max-h-96'
                alt=''
                src={image ?? ''}
              />
            </div>

            <div className='flex-1'>
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

            <Accordion title='Content' noBorderTop>
              <InfoTable list={contentList} />
            </Accordion>
            <Accordion title='Nutrients' noBorderTop>
              <InfoTable list={nutrientsList} />
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
                  <path d='M9 18l6-6-6-6' />
                </svg>
              </a>
            )}
          </div>
          <QuantityButtonGroup />
        </div>
      ) : (
        <div>
          <h1>No product found</h1>
        </div>
      )}
    </PageWrapper>
  );
};

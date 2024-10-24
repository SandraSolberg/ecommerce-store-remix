import { Accordion } from '~/components/common/atom/Accordion/Accordion';
import BasicButton from '~/components/common/atom/BasicButton/BasicButton';
import CardPageWrapper from '~/components/common/atom/CardPageWrapper/CardPageWrapper';
import InfoTable from '~/components/common/atom/InfoTable/InfoTable';
import NotFound from '~/components/common/atom/NotFound/NotFound';
import SVGIcon from '~/components/common/atom/SVGIcon/SVGIcon';
import endpoint from '~/data/constants/endpoints';
import { useGetData } from '~/hooks/useGetData';
import { addItem } from '~/redux/cartSlice';
import { useAppDispatch } from '~/redux/store';
import { FoodsType } from '~/types/food';
import { KeyValuePair } from '~/types/types';
import arrayToJoinedString from '~/utils/arrayToJoinedString';
import numberToFixedString from '~/utils/numberToFixedString';

export const DetailsPage = ({ productId }: { productId: number | null }) => {
  const { data: foods } = useGetData<FoodsType | null>(endpoint.FOODS);
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

  return (
    <CardPageWrapper>
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
                <p className='flex flex-row text-secondary text-lg md:text-xl'>
                  {quantity?.amount} {quantity?.unit}, {supplier}
                </p>
              </div>

              {allergens && allergens?.length > 0 && (
                <div className='flex gap-2 pb-4 text-lg md:text-xl'>
                  <p className='text-fuchsia-900 font-semibold'>Allergens </p>
                  <div className='flex flex-wrap gap-1 '>
                    {allergens?.map((allergen, index) => (
                      <p key={allergen}>
                        {allergen}
                        {index < allergens.length - 1 ? ',' : ''}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              <p className='text-3xl md:text-4xl font-bold text-blue-900'>
                {displayPrice}
              </p>
              <BasicButton
                className='mt-4 p-3'
                btnTitle='Add to cart'
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
                <SVGIcon
                  height='20'
                  width='20'
                  stroke={'var(--color-blue-600)'}
                >
                  <path d='M9 18l6-6-6-6' />
                </SVGIcon>
              </a>
            )}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </CardPageWrapper>
  );
};

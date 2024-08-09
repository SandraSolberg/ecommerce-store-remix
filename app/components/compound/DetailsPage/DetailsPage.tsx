import BasicButton from '~/components/atom/BasicButton/BasicButton';
import PageWrapper from '~/components/atom/PageWrapper/PageWrapper';
import { useFoods } from '~/hooks/useFoods';
import { addItem } from '~/redux/cartSlice';
import { useAppDispatch } from '~/redux/store';

export const DetailsPage = ({ productId }: { productId: number | null }) => {
  const { foods } = useFoods();
  const dispatch = useAppDispatch();

  console.log('productID', productId, foods);

  const product = foods?.foods.find((item) => item.foodId === productId);

  const {
    label,
    foodName,
    image,
    quantity,
    origin,
    countryOfProduction,
    description,
    allergens,
    link,
  } = product ?? {};

  const getCountry = () => {
    if (
      origin?.toLocaleLowerCase() === countryOfProduction?.toLocaleLowerCase()
    )
      return origin;
    else if (countryOfProduction && !origin) return countryOfProduction;
    else if (!countryOfProduction && origin) return origin;
    else if (!countryOfProduction && !origin) return null;

    return `${origin}/${countryOfProduction}`;
  };

  const country = getCountry();

  const handleAddProduct = () => {
    if (product) {
      dispatch(addItem({ foodItem: product }));
    }
  };

  return (
    <PageWrapper>
      {product ? (
        <div className='flex flex-col'>
          <div className='flex'>
            <img
              className='max-w-lg max-h-lg object-contain'
              alt=''
              src={image ?? ''}
            />{' '}
            <div>
              <p>{label}</p>
              <h1>{foodName}</h1>
              {country && <p>{country}</p>}
              <p>
                {quantity?.amount} {quantity?.unit}
              </p>
              <BasicButton title='Add to cart' onClick={handleAddProduct} />
            </div>
          </div>

          <div>
            <h2>About the product</h2>
            <p>{description}</p>
          </div>
          {allergens && allergens.length >= 0 && (
            <div>
              <h2>Allergens</h2>
              <ul>
                {allergens.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          )}
          {link && (
            <a href={link} className='hover:underline'>
              Read more about the product
            </a>
          )}
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </PageWrapper>
  );
};

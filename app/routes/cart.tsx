import { Link } from '@remix-run/react';
import CardPageWrapper from '~/components/common/atom/CardPageWrapper/CardPageWrapper';
import HeartButton from '~/components/common/atom/HeartButton/HeartButton';
import NoContent from '~/components/common/atom/NoContent/NoContent';
import SVGIcon from '~/components/common/atom/SVGIcon/SVGIcon';
import OrderSummary from '~/components/common/molecule/OrderSummary/OrderSummary';
import QuantityButtonGroup from '~/components/common/molecule/QuantityButtonGroup/QuantityButtonGroup';
import endpoint from '~/data/constants/endpoints';
import useCartActions from '~/hooks/useCartActions';
import { useGetData } from '~/hooks/useGetData';
import useQuantity from '~/hooks/useQuantity';
import { useAppSelector } from '~/redux/store';
import { CartItem } from '~/types/cart';
import { FoodsType } from '~/types/food';

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.addedItems);
  const { data: foods } = useGetData<FoodsType | null>(endpoint.FOODS);
  // const { foods } = useFoods();
  const { onDecrement, onIncrement, onInputChange } = useQuantity();
  const { handleRemove, productSum } = useCartActions();

  const getExistingFoodItem = (item: CartItem) =>
    foods?.foods.find((food) => food.foodId === item.foodId);
  return (
    <CardPageWrapper>
      {cartItems.length === 0 ? (
        <div className='flex flex-col items-center'>
          <NoContent title='Your shopping bag is empty' />
          <div className='flex flex-col gap-4 w-64'>
            <Link
              className='px-5 py-3 w-full bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 hover:no-underline'
              to='/login'
            >
              Log in
            </Link>
            <Link
              className='px-5 py-3 w-full text-center rounded-lg border-2 text-blue-600 border-blue-600 hover:border-blue-600 hover:bg-blue-200 hover:no-underline'
              to='/products'
            >
              Explore our products
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h1>Shopping bag</h1>
          <div className='flex flex-col md:flex-row'>
            <div className='flex-1 md:mr-8'>
              {cartItems.map((item, index) => (
                <article
                  key={item.foodId}
                  className={`flex gap-8 py-6 ${index > 0 ? 'border-t' : ''}`}
                >
                  <Link
                    className='w-32 h-32 hover:no-underline'
                    to={`/products/${item.foodId}`}
                  >
                    <img
                      className='w-28 h-28 object-contain '
                      alt={item.foodName ?? 'image of item'}
                      src={item.image ?? undefined}
                    />
                  </Link>

                  <div className='flex justify-between w-full'>
                    <div className='flex flex-col gap-4'>
                      <div>
                        <Link to={`/products/${item.foodId}`}>
                          {item.foodName}
                        </Link>
                        <p className='text-sm text-secondary'>
                          {item.quantity
                            ? `${item.quantity?.amount} ${item.quantity?.unit}`
                            : ''}
                        </p>
                      </div>
                      <div className='flex items-start gap-2'>
                        <QuantityButtonGroup
                          small
                          initValue={item.count.toString() ?? '0'}
                          onIncrement={() => onIncrement(item)}
                          onDecrement={(value: string) =>
                            onDecrement(value, getExistingFoodItem(item))
                          }
                          onInputChange={(value: string) =>
                            onInputChange(value, getExistingFoodItem(item))
                          }
                        />
                        <button
                          className='p-2 hover:bg-red-200 rounded-full'
                          onClick={() => handleRemove(item.foodId)}
                        >
                          <SVGIcon stroke='#991b1b' width='20' height='20'>
                            <>
                              <polyline points='3 6 5 6 21 6'></polyline>
                              <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
                              <line x1='10' y1='11' x2='10' y2='17'></line>
                              <line x1='14' y1='11' x2='14' y2='17'></line>
                            </>
                          </SVGIcon>
                        </button>

                        <HeartButton isRed onClick={() => {}} />
                      </div>
                    </div>
                    <p className='font-semibold'>{`${item.price.toFixed(2)} ${
                      item.currency
                    } `}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className='flex-1 basis-1/2m'>
              <OrderSummary
                products={parseFloat(productSum.toFixed(2))}
                shipping={0}
                currency='kr'
              />
            </div>
          </div>
        </div>
      )}
    </CardPageWrapper>
  );
};

export default Cart;

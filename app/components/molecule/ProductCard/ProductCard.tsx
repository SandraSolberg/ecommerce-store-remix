import { FoodType } from '~/types/food';

type ProductCardProps = {
  item: FoodType;
};

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <article className='w-40 h-80 bg-pure-white m-2 p-2 rounded'>
      <img
        className='w-full max-w-xs md:max-w-sm lg:max-w-md'
        alt={item.foodName ?? 'image of item'}
        src={item.image ?? undefined}
        sizes='(max-width: 160px) 140px, 140px'
        srcSet={`${item.image} 180w, ${item.image} 160w, ${item.image} 140w`}
      />
      <div>
        <p>{`${item.price} ${item.currency}`}</p>
        <p>{item.foodName}</p>
        <button>Add</button>
      </div>
    </article>
  );
};

export default ProductCard;

import { IFoodItem } from '~/types/food';

const sortObjectByDate = (items: IFoodItem[]) => {
  return items.sort((a, b) =>
    new Date(a.createdAt) < new Date(b.createdAt)
      ? -1
      : new Date(a.createdAt) > new Date(b.createdAt)
      ? 1
      : 0
  );
};

export default sortObjectByDate;

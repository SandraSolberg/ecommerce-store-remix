import { FoodType } from './food';

export type CartType = {
  items: FoodType[];
  total: number;
};

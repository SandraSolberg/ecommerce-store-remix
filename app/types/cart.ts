import { FoodType } from './food';

export type CartType = {
  items: FoodType[];
  addedItems: CartItem[];
  total: number;
  isOpen: boolean;
};

export interface CartItem extends FoodType {
  count: number;
}

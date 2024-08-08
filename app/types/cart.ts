import { IFoodItem } from './food';

export type CartType = {
  addedItems: CartItem[];
  total: number;
  isOpen: boolean;
};

export interface CartItem extends IFoodItem {
  count: number;
}

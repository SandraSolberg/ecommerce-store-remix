export type TagsType = {
  isOrganic: boolean;
  isRefrigerated: boolean;
  isFrozen: boolean;
};

export type QuantityType = {
  amount: number;
  unit: string;
};

export type CaloriesType = {
  quantity: number;
  unit: string;
};

export type EnergyType = {
  quantity: number;
  unit: string;
};

export interface IFoodItem {
  searchKeywords: string[] | null;
  foodName: string | null;
  tags: TagsType | null;
  description: string | null;
  image: string | null;
  foodGroupId: string;
  foodId: number;
  price: number;
  currency: string;
  quantity: QuantityType | null;
  calories: CaloriesType | null;
  energy: EnergyType | null;
  nutrients: string[];
  allergens: string[] | [] | null;
  origin: string | null;
  countryOfProduction: string | null;
  label: string | null;
  supplier: string | null;
  storage: string | null;
  link: string | null;
}

export type FoodsType = {
  foods: IFoodItem[];
};

export type GroupType = {
  foodGroupId: string;
  name: string;
  parentId?: string;
};

export type FoodGroupsType = {
  foodGroups: GroupType[];
};

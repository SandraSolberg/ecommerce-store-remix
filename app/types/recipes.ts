type InstructionStep = {
  step: number;
  info: string;
};

type ingredientsRef = {
  name: string;
  foodId: number;
};

export type RecipesType = {
  id: number;
  name: string;
  prepTimeMinutes: number;
  ingredients: ingredientsRef[];
  instructions: InstructionStep[];
  imageUrl: string;
  difficulty: string;
  slug: string;
};

export type RecipesGroupsType = {
  recipes: RecipesType[];
};

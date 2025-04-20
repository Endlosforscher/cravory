export type Ingredient = {
    name: string;
    quantity: string;
};
  
export type Recipe = {
    id: number;
    title: string;
    category: string;
    image: string;
    prepTime: number;
    difficulty: string;
    allergens: string[]; 
    ingredients: Ingredient[];
    process: string[];        
};
  
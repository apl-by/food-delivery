export type FoodCategoryTitle =
  | "Pizza"
  | "Burger"
  | "BBQ"
  | "Sushi"
  | "Vegan"
  | "Desserts";

type CategoriesData = {
  id: number;
  icon: string;
  title: FoodCategoryTitle;
};

export const categories: CategoriesData[] = [
  { id: 0, icon: "/categories-icon/pizza.png", title: "Pizza" },
  { id: 1, icon: "/categories-icon/burger.png", title: "Burger" },
  { id: 2, icon: "/categories-icon/meat.png", title: "BBQ" },
  { id: 3, icon: "/categories-icon/sushi.png", title: "Sushi" },
  { id: 4, icon: "/categories-icon/vegan.png", title: "Vegan" },
  { id: 5, icon: "/categories-icon/dessert.png", title: "Desserts" },
];

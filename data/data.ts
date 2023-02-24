export type NavItem = {
  id: number;
  title: string;
  link: string;
};

export const navItems: NavItem[] = [
  { id: 0, title: "Restaurants", link: "/" },
  { id: 1, title: "Deals", link: "/deals" },
  { id: 2, title: "My orders", link: "/orders" },
];

export type FoodCategoryTitle =
  | "Pizza"
  | "Burger"
  | "BBQ"
  | "Sushi"
  | "Vegan"
  | "Desserts";

export type CategoriesData = {
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

export type RestaurantData = {
  id: number;
  img: string;
  title: string;
  deliveryTime: string;
  minSum: string;
  menu: FoodCategoryTitle[];
  featured: boolean;
};

export const restaurants: RestaurantData[] = [
  {
    id: 0,
    img: "/resraurants/royal-sushi-house.png",
    title: "Royal Sushi House",
    deliveryTime: "30-40",
    minSum: "32",
    menu: ["Sushi", "Vegan"],
    featured: true,
  },
  {
    id: 1,
    img: "/resraurants/burgers-&-pizza.png",
    title: "Burgers & Pizza",
    deliveryTime: "40-60",
    minSum: "24",
    menu: ["Burger", "Pizza", "BBQ"],
    featured: true,
  },
  {
    id: 2,
    img: "/resraurants/ninja-sushi.png",
    title: "Ninja sushi",
    deliveryTime: "20-40",
    minSum: "40",
    menu: ["Sushi", "Vegan", "Desserts"],
    featured: false,
  },
  {
    id: 3,
    img: "/resraurants/sushi-master.png",
    title: "Sushi master",
    deliveryTime: "60-70",
    minSum: "49",
    menu: ["Sushi"],
    featured: false,
  },
  {
    id: 4,
    img: "/resraurants/japanese-sushi.png",
    title: "Japanese sushi",
    deliveryTime: "30-50",
    minSum: "104",
    menu: ["Sushi"],
    featured: false,
  },
  {
    id: 5,
    img: "/resraurants/kobe.png",
    title: "Kobe",
    deliveryTime: "20-30",
    minSum: "57",
    menu: ["Sushi", "Pizza", "Desserts"],
    featured: false,
  },
];

export const settings = [
  {
    id: 0,
    title: "Account",
    description: "Personal information",
    iconDefault: "/account/account.svg",
    iconActive: "/account/account-active.svg",
    to: "/account",
  },
  {
    id: 1,
    title: "Address",
    description: "Shippings addresses",
    iconDefault: "/account/address.svg",
    iconActive: "/account/address-active.svg",
    to: "/account/address",
  },
  {
    id: 2,
    title: "Payment method",
    description: "Connected credit cards",
    iconDefault: "/account/payment.svg",
    iconActive: "/account/payment-active.svg",
    to: "/account/payment",
  },
  {
    id: 3,
    title: "Security",
    description: "Password, 2FA",
    iconDefault: "/account/security.svg",
    iconActive: "/account/security-active.svg",
    to: "/account/security",
  },
];

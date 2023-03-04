import { ADD_ERROR, DELETE_ERROR, ErrorActions } from "../actions/errors";

type Order = {
  id: number;
  restaurant: string;
  category: string;
  meal: string;
  count: number;
};

export type OrderType = {
  readonly totalCount: number;
  list: Order[];
};

// example of the fake order
const fakeOrder: OrderType = {
  get totalCount() {
    return this.list.reduce((prev, i) => {
      return prev + i.count;
    }, 0);
  },
  list: [
    {
      id: 0,
      restaurant: "Burgers & Pizza",
      category: "Pizza",
      meal: "pepperoni",
      count: 2,
    },
    {
      id: 1,
      restaurant: "Royal Sushi House",
      category: "Sushi",
      meal: "filadelfia",
      count: 1,
    },
  ],
};

export type State = {
  order: OrderType;
  errors: string[];
};

export const initialState: State = {
  order: fakeOrder,
  errors: [],
};

export const reducer = (state: State, action: ErrorActions): State => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, errors: [...state.errors, action.payload] };
    case DELETE_ERROR:
      const newArr = state.errors.slice(1);
      return { ...state, errors: [...newArr] };
    default:
      throw new Error(`Unknow action type: ${(action as any).type}`);
  }
};

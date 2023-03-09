import {
  ADD_MODAL_INFO,
  DELETE_EXAMPLE_MOD,
  DELETE_MODAL_INFO,
  SET_EXAMPLE_MOD,
} from "../actions/actions";
import { Actions, OrderType, State } from "../types";

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

export const initialState: State = {
  order: fakeOrder,
  modalQueue: [],
  exampleMod: false,
};

export const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ADD_MODAL_INFO:
      return { ...state, modalQueue: [...state.modalQueue, action.payload] };
    case DELETE_MODAL_INFO:
      const newArr = state.modalQueue.slice(1);
      return { ...state, modalQueue: [...newArr] };
    case SET_EXAMPLE_MOD:
      return { ...state, exampleMod: true };
    case DELETE_EXAMPLE_MOD:
      return { ...state, exampleMod: false };
    default:
      throw new Error(`Unknow action type: ${(action as any).type}`);
  }
};

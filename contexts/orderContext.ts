import React from "react";

type Order = {
  id: number;
  restaurant: string;
  category: string;
  meal: string;
  count: number;
};

export type OrderType = {
  readonly totalCount: number;
  orders: Order[];
};

export const OrderContext = React.createContext<OrderType>({
  totalCount: 0,
  orders: [],
});

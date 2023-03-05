import { Actions, State } from "@/services/types";
import React, { Dispatch } from "react";

export type StateContextValue = {
  state: State;
  dispatch: Dispatch<Actions>;
};

export const StateContext = React.createContext<StateContextValue>(
  {} as StateContextValue
);

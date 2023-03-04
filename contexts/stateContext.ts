import { ErrorActions } from "@/services/actions/errors";
import { State } from "@/services/reducer/reducer";
import React, { Dispatch } from "react";

export type StateContextValue = {
  state: State;
  dispatch: Dispatch<ErrorActions>;
};

export const StateContext = React.createContext<StateContextValue>(
  {} as StateContextValue
);

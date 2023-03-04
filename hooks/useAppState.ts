import { StateContext } from "@/contexts/stateContext";
import { useContext } from "react";

export const useAppState = () => {
  return useContext(StateContext);
};

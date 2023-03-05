import { StateContext } from "@/contexts/state-context";
import { useContext } from "react";

export const useAppState = () => {
  return useContext(StateContext);
};

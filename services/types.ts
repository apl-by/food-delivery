import { AccountInputValues } from "@/components/_account-page/account-form/account-form";
import { ADD_MODAL_INFO, DELETE_MODAL_INFO } from "./actions/actions";

// reducer
export type Order = {
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

export type ModalAlertTypes = "error" | "notification";
export type ModalPromptTypes = "reSignIn" | "remove";
export type ModalPromptForInvoke = {
  actionName: "updEmailWithData" | "removeUser";
  data?: AccountInputValues;
  email?: string;
};

export type ModalAlert<T extends ModalAlertTypes> = {
  modalType: T;
  info:
    | {
        name?: string;
        message: string;
      }
    | Error;
};

export type ModalPrompt<T extends ModalPromptTypes> = {
  modalType: T;
  forInvoke?: ModalPromptForInvoke;
};

export type Modal = ModalAlert<ModalAlertTypes> | ModalPrompt<ModalPromptTypes>;

export type State = {
  order: OrderType;
  modalQueue: Modal[];
};

// actions

export type AddModalInfoAction = {
  readonly type: typeof ADD_MODAL_INFO;
  readonly payload: Modal;
};
export type DeleteModalInfoAction = {
  readonly type: typeof DELETE_MODAL_INFO;
};

export type Actions = AddModalInfoAction | DeleteModalInfoAction;

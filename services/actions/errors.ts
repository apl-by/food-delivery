export const ADD_ERROR = "ADD_ERROR";
export const DELETE_ERROR = "DELETE_ERROR";

export type AddErrorAction = {
  readonly type: typeof ADD_ERROR;
  readonly payload: any;
};
export type DeleteErrorAction = {
  readonly type: typeof DELETE_ERROR;
  readonly payload: any;
};

export type ErrorActions = AddErrorAction | DeleteErrorAction;

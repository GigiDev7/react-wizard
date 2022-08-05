import { CREATE_USER } from "../constants";

export interface IUser {
  firstname: string;
  lastname: string;
  age: number;
  residence: string;
  gender: string;
  bio?: string;
}

export interface CreateUSerAction {
  readonly type: typeof CREATE_USER;
  readonly payload: IUser;
}

export interface IUserState {
  userInfo: IUser | null;
}

type Action = CreateUSerAction;

export const userReducer = (
  state: IUserState = { userInfo: null },
  action: Action
) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, userInfo: action.payload };

    default:
      return state;
  }
};

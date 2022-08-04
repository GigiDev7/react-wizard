interface IUser {
  firstname: string;
  lastname: string;
  age: number;
  residence: string;
  gender: string;
  bio?: string;
}

interface CreateUSerAction {
  readonly type: "CREATE_USER";
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
    case "CREATE_USER":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

import { CREATE_USER } from "../constants";
import { IUser } from "../reducers/userReducer";

export const addUser = (userData: IUser) => {
  return { type: CREATE_USER, payload: userData };
};

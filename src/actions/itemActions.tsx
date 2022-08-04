import { REMOVE_ITEM, EDIT_ITEM, ADD_ITEM } from "../constants/index";
import { IItem } from "../reducers/itemReducer";

export const deleteItem = (id: string) => {
  return { type: REMOVE_ITEM, payload: id };
};

export const editItem = (itemData: IItem) => {
  return { type: EDIT_ITEM, payload: itemData };
};

export const addItem = (itemData: IItem) => {
  return { type: ADD_ITEM, payload: itemData };
};

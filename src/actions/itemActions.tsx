import { REMOVE_ITEM } from "../constants/index";

export const deleteItem = (id: string) => {
  return { type: REMOVE_ITEM, payload: id };
};

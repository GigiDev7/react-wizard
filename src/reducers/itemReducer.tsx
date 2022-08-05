import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM } from "../constants";

export interface IItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description?: string;
}

interface AddItemAction {
  readonly type: typeof ADD_ITEM;
  readonly payload: IItem;
}

interface RemoveItemAction {
  readonly type: typeof REMOVE_ITEM;
  readonly payload: string;
}

interface EditItemAction {
  readonly type: typeof EDIT_ITEM;
  readonly payload: IItem;
}

export interface IItemsState {
  items: IItem[];
}

type Action = AddItemAction | RemoveItemAction | EditItemAction;

export const itemReducer = (
  state: IItemsState = {
    items: [],
  },
  action: Action
) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };

    case REMOVE_ITEM: {
      const filteredItems = state.items.filter(
        (el) => el.id !== action.payload
      );
      return { ...state, items: filteredItems };
    }

    case EDIT_ITEM: {
      let targetItem = state.items.find((el) => el.id === action.payload.id);
      Object.assign(targetItem as IItem, action.payload);
      return { ...state };
    }

    default:
      return state;
  }
};

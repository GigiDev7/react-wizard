export interface IItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description?: string;
}

interface AddItemAction {
  readonly type: "ADD_ITEM";
  readonly payload: IItem;
}

interface RemoveItemAction {
  readonly type: "REMOVE_ITEM";
  readonly payload: string;
}

interface EditItemAction {
  readonly type: "EDIT_ITEM";
  readonly payload: IItem;
}

export interface IItemsState {
  items: IItem[];
}

type Action = AddItemAction | RemoveItemAction | EditItemAction;

export const itemReducer = (
  state: IItemsState = {
    items: [
      { id: "1", description: "desc", name: "item", price: 100, quantity: 2 },
      { id: "2", description: "desc", name: "item", price: 200, quantity: 2 },
    ],
  },
  action: Action
) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };

    case "REMOVE_ITEM": {
      const filteredItems = state.items.filter(
        (el) => el.id !== action.payload
      );
      return { ...state, items: filteredItems };
    }

    case "EDIT_ITEM": {
      const filteredItems = state.items.filter(
        (el) => el.id !== action.payload.id
      );
      return { ...state, items: [...filteredItems, action.payload] };
    }

    default:
      return state;
  }
};

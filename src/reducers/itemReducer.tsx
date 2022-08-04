interface IItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
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
  readonly payload: string;
}

export interface IItemsState {
  items: IItem[];
}

type Action = AddItemAction | RemoveItemAction | EditItemAction;

export const itemReducer = (
  state: IItemsState = { items: [] },
  action: Action
) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items] };

    case "REMOVE_ITEM":
      return { ...state };

    case "EDIT_ITEM":
      return { ...state };

    default:
      return state;
  }
};

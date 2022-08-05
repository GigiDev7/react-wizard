import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { IItemsState } from "../reducers/itemReducer";
import { addItem, editItem } from "../actions/itemActions";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  setIsItemFormShown: React.Dispatch<React.SetStateAction<boolean>>;
  setEditingItemId: React.Dispatch<React.SetStateAction<null | string>>;
  editingItemId: string | null;
  setNotificationText: React.Dispatch<React.SetStateAction<string>>;
  handleNotificationClose: () => void;
}

const ItemForm = ({
  setIsItemFormShown,
  setEditingItemId,
  editingItemId,
  setNotificationText,
  handleNotificationClose,
}: IProps) => {
  const [itemInfo, setItemInfo] = useState({ name: "", price: 0, quantity: 0 });
  const [isError, setIsError] = useState(false);

  const { items } = useSelector((state: { item: IItemsState }) => state.item);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editingItemId) {
      const editingItem = items.find((el) => el.id === editingItemId);
      setItemInfo({
        name: editingItem!.name,
        price: editingItem!.price,
        quantity: editingItem!.quantity,
      });
    }
  }, [editingItemId, items]);

  const onCloseClick = () => {
    setIsItemFormShown(false);
    setEditingItemId(null);
  };

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    setItemInfo((prevState) => {
      return { ...prevState, [target.name]: target.value };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!itemInfo.name || !itemInfo.price || !itemInfo.quantity) {
      setIsError(true);
      return;
    }

    if (editingItemId) {
      setIsItemFormShown(false);
      setEditingItemId(null);
      dispatch(editItem({ id: editingItemId, ...itemInfo }));
      setNotificationText("Item Updated");
    } else {
      setIsItemFormShown(false);
      setEditingItemId(null);
      dispatch(addItem({ id: uuidv4(), ...itemInfo }));
      setNotificationText("Item Added");
    }
    setIsError(false);
    handleNotificationClose();
  };

  return (
    <>
      <div className="fixed bottom-0 top-0 left-0 right-0 z-10 bg-[rgba(0,0,0,0.5)]"></div>
      <div className="z-10 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded">
        <AiOutlineClose
          onClick={onCloseClick}
          className="absolute right-0 cursor-pointer text-xl font-bold"
        />

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-4 w-[400px] h-[350px] items-center justify-center"
        >
          <h2 className="font-semibold">
            {editingItemId ? "Edit" : "Add"} item
          </h2>
          {isError && (
            <span className="text-red-500">All fields are required</span>
          )}
          <div className="flex flex-col w-[70%]">
            <label className="font-semibold" htmlFor="name">
              Name
            </label>
            <input
              onChange={(e) => handleChange(e)}
              value={itemInfo.name}
              name="name"
              id="name"
              className="border-[1px] border-black"
              type="text"
            />
          </div>
          <div className="flex flex-col w-[70%]">
            <label className="font-semibold" htmlFor="price">
              Price
            </label>
            <input
              onChange={(e) => handleChange(e)}
              value={itemInfo.price}
              name="price"
              id="price"
              className="border-[1px] border-black"
              type="number"
            />
          </div>
          <div className="flex flex-col w-[70%]">
            <label className="font-semibold" htmlFor="quantity">
              Quantity
            </label>
            <input
              onChange={(e) => handleChange(e)}
              value={itemInfo.quantity}
              name="quantity"
              id="quantity"
              className="border-[1px] border-black"
              type="number"
            />
            <button
              className="mt-6 bg-blue-500 hover:bg-blue-600 px-4 py-2 w-[40%] rounded mx-auto"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ItemForm;

import React from "react";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteItem } from "../actions/itemActions";

interface IProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  setIsItemFormShown: React.Dispatch<React.SetStateAction<boolean>>;
  setEditingItemId: React.Dispatch<React.SetStateAction<null | string>>;
}

const SingleItem = ({
  id,
  name,
  price,
  quantity,
  setIsItemFormShown,
  setEditingItemId,
}: IProps) => {
  const dispatch = useDispatch();

  const onRemoveClick = () => {
    dispatch(deleteItem(id));
  };

  const onUpdateClick = () => {
    setIsItemFormShown(true);
    setEditingItemId(id);
  };

  return (
    <>
      <div className="flex justify-between my-2 items-center relative" key={id}>
        <p className="w-[30%] text-center">{name}</p>
        <p className="w-[30%] text-center">{price}</p>
        <p className="w-[30%] text-center">{quantity}</p>

        <div className="absolute -right-14">
          <div className="flex text-xl gap-2">
            <AiFillEdit
              onClick={onUpdateClick}
              className="cursor-pointer text-blue-500 "
            />
            <AiTwotoneDelete
              onClick={onRemoveClick}
              className="cursor-pointer text-red-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleItem;

import { useSelector, useDispatch } from "react-redux";
import { IItemsState } from "../reducers/itemReducer";
import SingleItem from "./SingleItem";

interface IProps {
  changeStep: () => void;
}

const UserItems = ({ changeStep }: IProps) => {
  const { items } = useSelector((state: { item: IItemsState }) => state.item);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col w-[60%] ">
      <button className="mb-10 flex items-center gap-1 bg-blue-500 hover:bg-blue-600 px-4 py-1 w-fit text-white rounded">
        Add item
      </button>

      <div className="flex justify-between ">
        <p className="w-[30%] text-center">Item Name</p>
        <p className="w-[30%] text-center">Item Price</p>
        <p className="w-[30%] text-center">Item Quantity</p>
      </div>
      <div className="border-[2px] border-gray-200">
        {items.map((el) => (
          <SingleItem {...el} key={el.id} />
        ))}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 px-5 py-2 text-white rounded w-fit mt-20"
        onClick={() => changeStep()}
      >
        Back
      </button>
    </div>
  );
};

export default UserItems;

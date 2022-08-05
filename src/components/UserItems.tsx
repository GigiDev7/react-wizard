import { useState } from "react";
import { useSelector } from "react-redux";
import { IItemsState } from "../reducers/itemReducer";
import ItemForm from "./ItemForm";
import SingleItem from "./SingleItem";
import Notification from "./Notification";

interface IProps {
  changeStep: () => void;
}

const UserItems = ({ changeStep }: IProps) => {
  const { items } = useSelector((state: { item: IItemsState }) => state.item);

  const [isItemFormShown, setIsItemFormShown] = useState(false);
  const [editingItemId, setEditingItemId] = useState<null | string>(null);
  const [notificationText, setNotificationText] = useState("");

  const handleNotificationClose = () => {
    setTimeout(() => {
      setNotificationText("");
    }, 2000);
  };

  const onAddItemClick = () => {
    setIsItemFormShown(true);
    setEditingItemId(null);
  };

  return (
    <>
      {notificationText && <Notification text={notificationText} />}
      <div className="flex flex-col w-[60%] ">
        <div className="flex justify-between h-fit mb-20">
          <button
            className="bg-blue-500 hover:bg-blue-600 px-5 py-2 text-white rounded w-fit"
            onClick={() => changeStep()}
          >
            Back
          </button>

          <button
            onClick={onAddItemClick}
            className="   bg-blue-500 hover:bg-blue-600 px-4 py-1 w-fit text-white rounded"
          >
            Add item
          </button>
        </div>

        {!items.length ? (
          <div className="flex justify-center font-semibold">
            There are no items to display!
          </div>
        ) : (
          <>
            <div className="flex justify-between ">
              <p className="w-[30%] text-center font-semibold">Item Name</p>
              <p className="w-[30%] text-center font-semibold">Item Price</p>
              <p className="w-[30%] text-center font-semibold">Item Quantity</p>
            </div>
            <div className="border-[2px] border-gray-200">
              {items.map((el) => (
                <SingleItem
                  handleNotificationClose={handleNotificationClose}
                  setNotificationText={setNotificationText}
                  setEditingItemId={setEditingItemId}
                  setIsItemFormShown={setIsItemFormShown}
                  {...el}
                  key={el.id}
                />
              ))}
            </div>{" "}
          </>
        )}
      </div>
      {isItemFormShown && (
        <ItemForm
          editingItemId={editingItemId}
          setEditingItemId={setEditingItemId}
          setIsItemFormShown={setIsItemFormShown}
          setNotificationText={setNotificationText}
          handleNotificationClose={handleNotificationClose}
        />
      )}
    </>
  );
};

export default UserItems;

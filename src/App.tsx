import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import UserInfo from "./components/UserInfo";
import UserItems from "./components/UserItems";
import { IUserState } from "./reducers/userReducer";

function App() {
  const [step, setStep] = useState(0);
  const { userInfo } = useSelector((state: { user: IUserState }) => state.user);

  const wasUserCreated = useRef(false);

  useEffect(() => {
    if (userInfo?.firstname) {
      wasUserCreated.current = true;
    }
  }, [userInfo?.firstname]);

  const changeStep = () => {
    step === 0 ? setStep(1) : setStep(0);
  };

  return (
    <div className="flex justify-center pt-16 h-[100vh] bg-slate-50">
      {step === 0 ? (
        <UserInfo changeStep={changeStep} />
      ) : (
        <UserItems
          wasUserCreated={wasUserCreated.current}
          changeStep={changeStep}
        />
      )}
    </div>
  );
}

export default App;

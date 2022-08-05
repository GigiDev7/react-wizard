import { useState } from "react";
import UserInfo from "./components/UserInfo";
import UserItems from "./components/UserItems";

function App() {
  const [step, setStep] = useState(0);

  const changeStep = () => {
    step === 0 ? setStep(1) : setStep(0);
  };

  return (
    <div className="flex justify-center pt-16 h-[100vh] bg-slate-50">
      {step === 0 ? (
        <UserInfo changeStep={changeStep} />
      ) : (
        <UserItems changeStep={changeStep} />
      )}
    </div>
  );
}

export default App;

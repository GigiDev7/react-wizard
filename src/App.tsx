import StepWizard from "react-step-wizard";
import UserInfo from "./components/UserInfo";
import UserItems from "./components/UserItems";

function App() {
  return (
    <div>
      <StepWizard>
        <UserInfo />
        <UserItems />
      </StepWizard>
    </div>
  );
}

export default App;

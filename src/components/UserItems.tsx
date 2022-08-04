import { StepWizardChildProps } from "react-step-wizard";

const UserItems = (props: Partial<StepWizardChildProps>) => {
  return (
    <div>
      <h1>user item</h1>
      <button onClick={props.previousStep}>prev</button>
    </div>
  );
};

export default UserItems;

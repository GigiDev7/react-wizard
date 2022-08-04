import { StepWizardChildProps } from "react-step-wizard";

interface IProps {
  changeStep: () => void;
}

const UserItems = ({ changeStep }: IProps) => {
  return (
    <div>
      <h1>user item</h1>
      <button onClick={() => changeStep()}>prev</button>
    </div>
  );
};

export default UserItems;

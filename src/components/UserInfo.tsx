import React from "react";
import { StepWizardChildProps } from "react-step-wizard";

const UserInfo = (props: Partial<StepWizardChildProps>) => {
  return (
    <div>
      <h1>user info</h1>
      <button onClick={props.nextStep}>next</button>
    </div>
  );
};

export default UserInfo;

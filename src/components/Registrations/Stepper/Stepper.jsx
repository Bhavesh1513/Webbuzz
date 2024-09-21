import React from "react";
import "./Stepper.css";
import { TiTick } from "react-icons/ti";

const Stepper = ({ currentStep, setCurrentStep, complete }) => {
  const steps = ["Personal Details", "Contact", "Address", "Review & Submit"];

  return (
    <div className="flex justify-between">
      {steps?.map((step, i) => (
        <div
          key={i}
          className={`step-item ${currentStep === i + 1 && "active"} ${
            (i + 1 < currentStep || complete) && "complete"
          }`}
        >
          <div className="step">
            {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
          </div>
          <p className="text-gray-500 text-xl w-[100px] text-center">{step}</p>
        </div>
      ))}
    </div>
  );
};

export default Stepper;

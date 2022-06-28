import React, { useState } from "react";
import Board from "../components/Board";

//Data
import { data } from "../data/data";

//Icons
import PrevIcon from "../assets/svg/left.svg";
import NextIcon from "../assets/svg/right.svg";
import End from "../components/End";

const Onboarding = () => {
  const [step, setStep] = useState(0);

  const plusStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const minusStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="modal">
        {step > 0 && (
          <button className="button-moadl prev" onClick={minusStep}>
            <img src={PrevIcon} alt="prev" />
          </button>
        )}
        {step < data.length ? (
          <Board allData={data} boardData={data[step]} plusStep={plusStep} />
        ) : (
          <End />
        )}
        {step < data.length && (
          <button className="button-moadl next" onClick={plusStep}>
            <img src={NextIcon} alt="next" />
          </button>
        )}
    </div>
  );
};

export default Onboarding;

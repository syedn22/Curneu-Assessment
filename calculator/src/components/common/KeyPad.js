import React from "react";
import "../../css/style.css";

import AppButton from "./AppButton";

function KeyPad({ handleOnClick, handleBack, handleReset, handleResult }) {
  return (
    <div>
      <div className="row">
        <AppButton value="1" onClick={handleOnClick} />
        <AppButton value="2" onClick={handleOnClick} />
        <AppButton value="3" onClick={handleOnClick} />
        <AppButton value=" / " onClick={handleOnClick} />
        <AppButton value="(" onClick={handleOnClick} />
      </div>
      <div className="row">
        <AppButton value="4" onClick={handleOnClick} />
        <AppButton value="5" onClick={handleOnClick} />
        <AppButton value="6" onClick={handleOnClick} />
        <AppButton value=" + " onClick={handleOnClick} />
        <AppButton value=")" onClick={handleOnClick} />
      </div>
      <div className="row">
        <AppButton value="7" onClick={handleOnClick} />
        <AppButton value="8" onClick={handleOnClick} />
        <AppButton value="9" onClick={handleOnClick} />
        <AppButton value=" - " onClick={handleOnClick} />
        <AppButton value="Back" className="red" onClick={handleBack} />
      </div>
      <div className="row">
        <AppButton value="." onClick={handleOnClick} />
        <AppButton value="0" onClick={handleOnClick} />
        <AppButton value=" * " onClick={handleOnClick} />
        <AppButton value="=" className="equalButton" onClick={handleResult} />
        <AppButton value="Reset" className="red" onClick={handleReset} />
      </div>
    </div>
  );
}

export default KeyPad;

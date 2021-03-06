import React, { useState } from "react";
import "../css/style.css";

import Calculator from "../source/Calculator";
import KeyPad from "../components/common/KeyPad";

function StandardCalculator(props) {
  const [textValue, setTextValue] = useState("");

  function handleOnClick(value) {
    if (textValue === "0") return setTextValue(value);
    setTextValue(textValue + String(value));
  }

  function handleOnChange(e) {
    const value = e.currentTarget.value;
    setTextValue(value);
  }

  function handleResult(e) {
    const result = Calculator.calculate(textValue);
    setTextValue(result);
  }

  function handleReset() {
    setTextValue("");
  }

  function handleBack() {
    const result = textValue.substring(0, textValue.length - 1);
    setTextValue(result);
  }
  return (
    <div className="main">
      <section>
        <input
          className="textArea"
          value={textValue}
          onChange={handleOnChange}
          placeholder="0"
          disabled
        />

        <KeyPad
          handleBack={handleBack}
          handleOnClick={handleOnClick}
          handleResult={handleResult}
          handleReset={handleReset}
        />
      </section>
      <div></div>
    </div>
  );
}

export default StandardCalculator;

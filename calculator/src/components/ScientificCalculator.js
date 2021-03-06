import React, { useState } from "react";
import "../css/style.css";
import Calculator from "../source/Calculator";

import KeyPad from "../components/common/KeyPad";
import ScientificKeypad from "../components/common/ScientificKeypad";

function ScientificCalculator(props) {
  const [textValue, setTextValue] = useState("");
  const [firstValue, setfirstValue] = useState(null);

  function handleOnClick(value) {
    if (textValue === "0") return setTextValue(value);
    setTextValue(textValue + String(value));
  }

  function handleOnChange(e) {
    const value = e.currentTarget.value;
    setTextValue(value);
  }

  function handleBack() {
    const result = textValue.substring(0, textValue.length - 1);
    setTextValue(result);
  }

  function handleResult(e) {
    let result = Calculator.calculate(textValue);

    setTextValue(result);
    setfirstValue(result);
  }

  function handleTrignometryFunction(e) {
    let result = textValue;
    if (isNaN(result)) result = Calculator.calculate(textValue);

    result = Calculator.mathFunction(e, result);

    if (isNaN(result)) {
      setTextValue("Invalid");
      setfirstValue(null);
      return;
    }

    setTextValue(result);
    setfirstValue(`${e}(${firstValue || textValue})`);
  }

  function handleMathFunction(e) {
    let result = textValue;
    switch (e) {
      case "e":
        result += Math.E;
        break;
      case "π":
        result += Math.PI;
        break;
    }
    setTextValue(result);
  }

  function handleReset() {
    setTextValue("");
    setfirstValue(null);
  }
  return (
    <div className="main">
      <div className="row">
        <input
          className="textArea"
          value={textValue}
          onChange={handleOnChange}
          placeholder="0"
          disabled
        />
        {firstValue && (
          <input className="textInput" disabled value={firstValue} />
        )}
      </div>
      <div className="row">
        <KeyPad
          handleBack={handleBack}
          handleOnClick={handleOnClick}
          handleResult={handleResult}
          handleReset={handleReset}
        />
        <ScientificKeypad
          handleMathFunction={handleMathFunction}
          handleTrignometryFunction={handleTrignometryFunction}
        />
      </div>
    </div>
  );
}

export default ScientificCalculator;

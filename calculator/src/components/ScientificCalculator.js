import React, { useState } from "react";
import "../css/style.css";

import AppButton from "../components/common/AppButton";
import Calculator from "../source/Calculator";

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
    const postfix = Calculator.infixToPostfix(textValue);
    console.log(postfix);
    if (postfix === "Invalid Expression") {
      return setTextValue("Error");
    }
    const result = Calculator.evaluatePostfix(postfix);
    if (isNaN(result)) return setTextValue("Error");
    setTextValue(result);
    setfirstValue(result);
  }

  function handleReset() {
    setTextValue("");
    setfirstValue(null);
  }
  return (
    <div className="main">
      <h1>Scientific Calculator</h1>
      <section className="column">
        <input
          className="textArea"
          value={textValue}
          onChange={handleOnChange}
          placeholder="0"
          disabled
        />

        <div className="row">
          <AppButton value="1" onClick={handleOnClick} />
          <AppButton value="2" onClick={handleOnClick} />
          <AppButton value="3" onClick={handleOnClick} />
          <AppButton value=" / " onClick={handleOnClick} />
          <AppButton value=" * " onClick={handleOnClick} />
          <AppButton value="Back" onClick={handleBack} />
        </div>
        <div className="row">
          <AppButton value="4" onClick={handleOnClick} />
          <AppButton value="5" onClick={handleOnClick} />
          <AppButton value="6" onClick={handleOnClick} />
          <AppButton value=" + " onClick={handleOnClick} />
          <AppButton value=" - " onClick={handleOnClick} />
          <AppButton value="M+" onClick={handleOnClick} />
        </div>
        <div className="row">
          <AppButton value="7" onClick={handleOnClick} />
          <AppButton value="8" onClick={handleOnClick} />
          <AppButton value="9" onClick={handleOnClick} />
          <AppButton value="(" onClick={handleOnClick} />
          <AppButton value=")" onClick={handleOnClick} />
          <AppButton value="M-" onClick={handleOnClick} />
        </div>
        <div className="row">
          <AppButton value="." onClick={handleOnClick} />
          <AppButton value="0" onClick={handleOnClick} />
          <AppButton value="sin" onClick={handleResult} />
          <AppButton value="cos" onClick={handleResult} />
          <AppButton value="tan" onClick={handleOnClick} />
        </div>
        <div className="row">
          <AppButton value="e" onClick={handleOnClick} />
          <AppButton value="e^x" onClick={handleOnClick} />
          <AppButton value="x^y" onClick={handleResult} />
          <AppButton value="x^2" onClick={handleResult} />
          <AppButton value="x^3" onClick={handleResult} />
          <AppButton value="10^x" onClick={handleOnClick} />
        </div>
        <div className="row">
          <AppButton value="π" onClick={handleOnClick} />
          <AppButton value="y√x" onClick={handleOnClick} />
          <AppButton value="3√x" onClick={handleResult} />
          <AppButton value="√x" onClick={handleResult} />
          <AppButton value="ln" onClick={handleResult} />
          <AppButton value="log" onClick={handleOnClick} />
        </div>
        <div className="row">
          <AppButton value="1/x" onClick={handleOnClick} />
          <AppButton value="n!" onClick={handleOnClick} />
          <AppButton value="1/sin" onClick={handleOnClick} />
          <AppButton value="1/cos" onClick={handleOnClick} />
          <AppButton value="1/tan" onClick={handleOnClick} />
        </div>
        <div className="row">
          <AppButton value="Reset" onClick={handleReset} />
          <AppButton value="=" className="equalButton" onClick={handleResult} />
          {firstValue && (
            <input className="textInput" disabled value={firstValue} />
          )}
        </div>
      </section>
      <div></div>
    </div>
  );
}

export default ScientificCalculator;

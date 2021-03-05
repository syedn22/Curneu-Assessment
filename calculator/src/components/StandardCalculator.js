import React, { useState } from "react";
import "../css/style.css";

import AppButton from "../components/common/AppButton";
import Calculator from "../source/Calculator";

function StandardCalculator(props) {
  const [textValue, setTextValue] = useState("");
  const [firstValue, setfirstValue] = useState(null);
  const [operator, setoperator] = useState(null);

  function handleOnClick(value) {
    if (textValue === "0") return setTextValue(value);
    setTextValue(textValue + String(value));
  }

  function handleOnChange(e) {
    const value = e.currentTarget.value;
    setTextValue(value);
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
    setoperator(null);
  }
  return (
    <div className="main">
      <h1>Standard Calculator</h1>
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
          <AppButton value="(" onClick={handleOnClick} />
          <AppButton value=" / " onClick={handleOnClick} />
        </div>
        <div className="row">
          <AppButton value="4" onClick={handleOnClick} />
          <AppButton value="5" onClick={handleOnClick} />
          <AppButton value="6" onClick={handleOnClick} />
          <AppButton value=")" onClick={handleOnClick} />
          <AppButton value=" + " onClick={handleOnClick} />
        </div>
        <div className="row">
          <AppButton value="7" onClick={handleOnClick} />
          <AppButton value="8" onClick={handleOnClick} />
          <AppButton value="9" onClick={handleOnClick} />
          <AppButton value=" - " onClick={handleOnClick} />
          <AppButton value=" * " onClick={handleOnClick} />
        </div>
        <div className="row">
          <AppButton value="." onClick={handleOnClick} />
          <AppButton value="0" onClick={handleOnClick} />
          <AppButton value="=" className="equalButton" onClick={handleResult} />
        </div>
        <div className="row">
          <AppButton value="Reset" onClick={handleReset} />
          {firstValue && (
            <input className="textInput" disabled value={firstValue} />
          )}
          {operator && (
            <input className="textInput" disabled value={operator} />
          )}
        </div>
      </section>
      <div></div>
    </div>
  );
}

export default StandardCalculator;

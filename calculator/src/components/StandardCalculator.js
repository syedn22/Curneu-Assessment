import React, { useState } from "react";
import "../css/style.css";

import AppButton from "../components/common/AppButton";

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

  function handleOnClickOperator(e) {
    if (!operator) setoperator(e);
    if (!firstValue) setfirstValue(Number(textValue));
    setTextValue("");
  }

  function handleResult(e) {
    const secondValue = Number(textValue);
    let result = 0;

    if (operator === "+") result = firstValue + secondValue;
    if (operator === "-") result = firstValue - secondValue;
    if (operator === "/") result = firstValue / secondValue;
    if (operator === "*") result = firstValue * secondValue;

    setTextValue(result);
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
        />

        <div className="row">
          <AppButton value="1" onClick={handleOnClick} />
          <AppButton value="2" onClick={handleOnClick} />
          <AppButton value="3" onClick={handleOnClick} />
          <AppButton value="/" onClick={handleOnClickOperator} />
        </div>
        <div className="row">
          <AppButton value="4" onClick={handleOnClick} />
          <AppButton value="5" onClick={handleOnClick} />
          <AppButton value="6" onClick={handleOnClick} />
          <AppButton value="+" onClick={handleOnClickOperator} />
        </div>
        <div className="row">
          <AppButton value="7" onClick={handleOnClick} />
          <AppButton value="8" onClick={handleOnClick} />
          <AppButton value="9" onClick={handleOnClick} />
          <AppButton value="-" onClick={handleOnClickOperator} />
        </div>
        <div className="row">
          <AppButton value="." onClick={handleOnClick} />
          <AppButton value="0" onClick={handleOnClick} />
          <AppButton value="=" onClick={handleResult} />
          <AppButton value="*" onClick={handleOnClickOperator} />
        </div>
      </section>
      <div></div>
    </div>
  );
}

export default StandardCalculator;

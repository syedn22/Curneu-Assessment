import React, { useState } from "react";
import "../css/style.css";
import Calculator from "../source/Calculator";

import AppButton from "../components/common/AppButton";

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


    switch (e) {
      case "sin":
        result = Math.sin(Number(result));
        break;
      case "cos":
        result = Math.cos(Number(result));
        break;
      case "tan":
        result = Math.tan(Number(result));
        break;
      case "1/tan":
        result = 1 / Math.tan(Number(result));
        break;
      case "1/sin":
        result = 1 / Math.sin(Number(result));
        break;
      case "1/cos":
        result = 1 / Math.cos(Number(result));
        break;
      case "log":
        result = Math.log10(Number(result));
        break;
      case "ln":
        result = Math.log(Number(result));
        break;
      case "x^2":
        result = Math.pow(Number(result), 2);
        break;
      case "x^3":
        result = Math.pow(Number(result), 3);
        break;
      case "10^x":
        result = Math.pow(10, Number(result));
        break;
      case "e^x":
        result = Math.pow(Math.E, Number(result));
        break;
      case "1/x":
        result = 1 / Number(result);
        break;
      case "√x":
        result = Math.sqrt(Number(result));
        break;
      case "3√x":
        result = Math.cbrt(Number(result));
        break;
      case "n!":
        result = Math.round(Number(result));
        break;
    }

    if (isNaN(result)) {
      setTextValue("Invalid");
      setfirstValue(null);
      return;
    }

    setTextValue(result);
    setfirstValue(`${e}(${firstValue || textValue})`);
  }

  function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
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
      <section className="column">
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
          <AppButton value="1" onClick={handleOnClick} />
          <AppButton value="2" onClick={handleOnClick} />
          <AppButton value="3" onClick={handleOnClick} />
          <AppButton value="/" onClick={handleOnClick} />
          <AppButton value="*" onClick={handleOnClick} />
          <AppButton value="1/x" onClick={handleTrignometryFunction} />
          <AppButton
            value="log"
            className="gray"
            onClick={handleTrignometryFunction}
          />
          <AppButton value="Back" className="red" onClick={handleBack} />
        </div>
        <div className="row">
          <AppButton value="4" onClick={handleOnClick} />
          <AppButton value="5" onClick={handleOnClick} />
          <AppButton value="6" onClick={handleOnClick} />
          <AppButton value="+" onClick={handleOnClick} />
          <AppButton value="-" onClick={handleOnClick} />
          <AppButton
            value="1/tan"
            className="yellow"
            onClick={handleTrignometryFunction}
          />
          <AppButton
            value="ln"
            className="gray"
            onClick={handleTrignometryFunction}
          />
          <AppButton value="Reset" className="red" onClick={handleReset} />
        </div>
        <div className="row">
          <AppButton value="7" onClick={handleOnClick} />
          <AppButton value="8" onClick={handleOnClick} />
          <AppButton value="9" onClick={handleOnClick} />
          <AppButton value="(" onClick={handleOnClick} />
          <AppButton value=")" onClick={handleOnClick} />
          <AppButton
            value="1/cos"
            className="yellow"
            onClick={handleTrignometryFunction}
          />
          <AppButton
            value="√x"
            className="gray"
            onClick={handleTrignometryFunction}
          />
          <AppButton value="=" className="equalButton" onClick={handleResult} />
        </div>
        <div className="row">
          <AppButton value="." onClick={handleOnClick} />
          <AppButton value="0" onClick={handleOnClick} />
          <AppButton
            value="sin"
            className="yellow"
            onClick={handleTrignometryFunction}
          />
          <AppButton
            value="cos"
            className="yellow"
            onClick={handleTrignometryFunction}
          />
          <AppButton
            value="tan"
            className="yellow"
            onClick={handleTrignometryFunction}
          />
          <AppButton
            value="1/sin"
            className="yellow"
            onClick={handleTrignometryFunction}
          />
          <AppButton
            value="3√x"
            className="gray"
            onClick={handleTrignometryFunction}
          />
        </div>
        <div className="row">
          <AppButton value="e" className="gray" onClick={handleMathFunction} />
          <AppButton
            value="e^x"
            className="gray"
            onClick={handleTrignometryFunction}
          />
          <AppButton
            value="x^2"
            className="gray"
            onClick={handleTrignometryFunction}
          />
          <AppButton
            value="x^3"
            className="gray"
            onClick={handleTrignometryFunction}
          />
          <AppButton
            value="10^x"
            className="gray"
            onClick={handleTrignometryFunction}
          />
          <AppButton
            value="n!"
            className="gray"
            onClick={handleTrignometryFunction}
          />
          <AppButton value="π" className="gray" onClick={handleMathFunction} />
        </div>
      </section>
      <div></div>
    </div>
  );
}

export default ScientificCalculator;

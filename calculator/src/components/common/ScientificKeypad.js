import React from "react";
import "../../css/style.css";

import AppButton from "./AppButton";

function ScientificKeypad({ handleMathFunction, handleTrignometryFunction }) {
  return (
    <div className="column">
      <div className="row">
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
        <AppButton value="e" className="gray" onClick={handleMathFunction} />
      </div>

      <div className="row">
        <AppButton
          value="1/sin"
          className="yellow"
          onClick={handleTrignometryFunction}
        />
        <AppButton
          value="1/cos"
          className="yellow"
          onClick={handleTrignometryFunction}
        />
        <AppButton
          value="1/tan"
          className="yellow"
          onClick={handleTrignometryFunction}
        />
        <AppButton value="π" className="gray" onClick={handleMathFunction} />
      </div>

      <div className="row">
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
      </div>

      <div className="row">
        <AppButton
          value="1/x"
          className="gray"
          onClick={handleTrignometryFunction}
        />
        <AppButton
          value="√x"
          className="gray"
          onClick={handleTrignometryFunction}
        />
        <AppButton
          value="n!"
          className="gray"
          onClick={handleTrignometryFunction}
        />

        <AppButton
          value="3√x"
          className="gray"
          onClick={handleTrignometryFunction}
        />
      </div>
      <div className="row">
        <AppButton
          value="log"
          className="gray"
          onClick={handleTrignometryFunction}
        />
        <AppButton
          value="ln"
          className="gray"
          onClick={handleTrignometryFunction}
        />
      </div>
    </div>
  );
}

export default ScientificKeypad;

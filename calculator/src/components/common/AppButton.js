import React from "react";

import "../../css/style.css";

function AppButton({ value, onClick, className }) {
  function handleOnClick(e) {
    e.preventDefault();
    onClick(e.target.value);
  }
  return (
    <button
      className={`button ${className}`}
      value={value}
      onClick={handleOnClick}
    >
      {value}
    </button>
  );
}

export default AppButton;

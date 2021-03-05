import React from "react";

import "../../css/style.css";

function AppButton({ value, onClick }) {
  function handleOnClick(e) {
    e.preventDefault();
    onClick(e.target.value);
  }
  return (
    <button className="button" value={value} onClick={handleOnClick}>
      {value}
    </button>
  );
}

export default AppButton;

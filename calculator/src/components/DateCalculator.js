import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../css/style.css";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import AppButton from "../components/common/AppButton";

// CSS Modules, react-datepicker-cssmodules.css
const DateCalculator = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [result, setresult] = useState({});

  function handleResult() {
    let temp = {};
    let difference = Math.abs(Date.parse(startDate) - Date.parse(endDate));

    // if (toggleCheckBox) difference = difference + 8.64 * Math.pow(10, 7);

    temp["second"] = "Seconds " + difference / 1000;
    temp["minute"] = "Minutes " + difference / 60000;
    temp["hour"] = "Hours " + difference / (3.6 * Math.pow(10, 6));
    temp["day"] = "Days " + difference / (8.64 * Math.pow(10, 7));
    temp["month"] = "Months " + difference / (2.628 * Math.pow(10, 9));
    temp["year"] = "Year " + difference / (3.154 * Math.pow(10, 10));

    console.log(temp);

    setresult(temp);
  }
  return (
    <div className="main">
      <h2>From Date</h2>
      <DatePicker
        className="textDateInput"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <h2>To Date</h2>
      <DatePicker
        className="textDateInput"
        selected={endDate}
        onChange={(date) => setendDate(date)}
      />
      <br />
      <AppButton value="Answer" className="answer" onClick={handleResult} />

      <div className="row">
        <input
          className="textDateInput output"
          placeholder="Seconds"
          disabled
          value={result["second"]}
        />
        <input
          className="textDateInput output"
          placeholder="Minutes"
          disabled
          value={result["minute"]}
        />
      </div>
      <div className="row">
        <input
          className="textDateInput output"
          placeholder="Hours"
          disabled
          value={result["hour"]}
        />
        <input
          className="textDateInput output"
          placeholder="Days"
          disabled
          value={result["day"]}
        />
      </div>
      <div className="row">
        <input
          className="textDateInput output"
          placeholder="Months"
          disabled
          value={result["month"]}
        />
        <input
          className="textDateInput output"
          placeholder="Years"
          disabled
          value={result["year"]}
        />
      </div>
    </div>
  );
};

export default DateCalculator;

import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.selectedYear(event.target.value);
  };

  const dropdownChangeHandlerMonth = (event) => {
    props.selectedMonth(event.target.value);
  };


  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
      <label>Filter: mesec</label>
        <select value={props.monthValue} onChange={dropdownChangeHandlerMonth}>
          <option value="Januar">Januar</option>
          <option value="Februar">Februar</option>
          <option value="Marec">Marec</option>
          <option value="April">April</option>
          <option value="Maj">Maj</option>
          <option value="Junij">Junij</option>
          <option value="Julij">Julij</option>
          <option value="Avgust">Avgust</option>
          <option value="September">September</option>
          <option value="Oktober">Oktober</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <label>Filter: leto</label>
        <select value={props.value} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

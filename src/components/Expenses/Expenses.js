import React, { useState, useContext } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import DataContext from "../store/data-context";

import "./Expenses.css";

const Expenses = (props) => {
  const dataCtx = useContext(DataContext);
  const [isEditing, setIsEditing] = useState(false);
  const [filteredYear, setFilteredYear] = useState("2022");
  const [filteredMonth, setFilteredMonth] = useState("Januar");

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const endEditingHandler = () => {
    setIsEditing(false);
  };

  function filteredYearHandler(currentYear) {
    setFilteredYear(currentYear);
  }
  const dropdownChangeHandler = (currentMonth) => {
    setFilteredMonth(currentMonth);
  };

  return (
    <section>
      <Card className="expenses">
        {!isEditing && <button onClick={startEditingHandler}>Stroški</button>}
        {isEditing && (
          <div>
            <button onClick={endEditingHandler}>Stroški</button>
            <ExpensesFilter
              selectedYear={filteredYearHandler}
              value={filteredYear}
              selectedMonth={dropdownChangeHandler}
              monthValue={filteredMonth}
            />
            <ExpensesList
              items={dataCtx.filteredExpenses(filteredMonth, filteredYear)}
            />
          </div>
        )}
      </Card>
    </section>
  );
};

export default Expenses;

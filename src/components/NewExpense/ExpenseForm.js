import "./ExpenseForm.css";
import React, { useState, useContext } from "react";
import DataContext from "../store/data-context";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("Elektrika");
  const [enteredAmount, setEnteredAmount] = useState(0);
  let today = new Date();
  let date= today.getFullYear() + "-"+ today.getMonth()
  const [enteredDate, setEnteredDate] = useState(date);


  const dataCtx = useContext(DataContext);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Strošek</label>

          <select value={enteredTitle} onChange={titleChangeHandler}>
            {dataCtx.elementsArray.map((x) => (
              <option key={x.id} value={x.value}>
                {x.value}
              </option>
            ))}
          </select>
        </div>
        <div className="new-expense__control">
          <label>Znesek</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Datum</label>
          <input
            type="month"
            min="2019-01"
            max="2022-12"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Prekliči
        </button>
        <button type="submit">Dodaj strošek</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

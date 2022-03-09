import React, { useState, useContext, useEffect, useCallback } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import DataContext from "../store/data-context";

const NewExpense = (props) => {
  const dataCtx = useContext(DataContext);
  const [isEditing, setIsEditing] = useState(false);

  const { dodajExpenses } = dataCtx;

  const saveExpenseDataHandler = useCallback((enteredExpenseData) => {
    console.log("save expense data handler izvedel se je");
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    fetch(
      "https://stroskovnik-49bcc-default-rtdb.europe-west1.firebasedatabase.app/user/stroski.json",
      {
        method: "POST",
        body: JSON.stringify({
          id: expenseData.id,
          amount: expenseData.amount,
          date: expenseData.date,
          title: expenseData.title,
        }),
      }
    );

    setIsEditing(false);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://stroskovnik-49bcc-default-rtdb.europe-west1.firebasedatabase.app/user/stroski.json"
        );
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error("Niste dodali nobenega stroška");
        }

        const loadedExpenses = [];
        console.log("USEEFFECT SE JE IZVEDEL NEW EXPENSES");

        for (const key in responseData) {
          console.log(new Date(responseData[key].date));
          loadedExpenses.push({
            id: key,
            amount: responseData[key].amount,
            title: responseData[key].title,
            date: new Date(responseData[key].date),
          });
        }

        dodajExpenses(loadedExpenses);
      } catch (error) {
        throw new Error(error.message);
      }
    };

    fetchData();
  }, [dodajExpenses, isEditing]);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <section className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Dodaj nov strošek</button>
      )}
      {isEditing && (
        <React.Fragment>
          <h1>Dodaj novi strošek</h1>
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        </React.Fragment>
      )}
    </section>
  );
};

export default NewExpense;

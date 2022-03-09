import { createContext, useState, useCallback } from "react";

const DataContext = createContext({
  expenses: [],
  filteredExpenses: (year) => {},
  addData: (newData) => {},
  dodajExpenses: (expenses) => {},
  addElementsArray: (elementsArray) => {},
  elementsArray: [],
  plača: [],
  dodajplačo: (plača) => {},
  months: [],
});

export function DataContextProvider(props) {
  const months = [
    "Januar",
    "Februar",
    "Marec",
    "April",
    "Maj",
    "Junij",
    "Julij",
    "Avgust",
    "September",
    "Oktober",
    "November",
    "December",
  ];

  const [expenses, setExpenses] = useState([]);
  const [plača, setPlača] = useState([]);
  const [elementsArray, setElementsArray] = useState([]);

  const dodajExpenses = useCallback((expenses) => {
    setExpenses(expenses);
    
  }, []);

  const addDataHandler = useCallback((newData) => {
    
    setExpenses((previousData) => {
      console.log(newData);
      return previousData.concat(newData);
    });
  }, []);

  const dodajplačo = useCallback((plača) => {
   
    setPlača(plača)
  }, []);

  const addElementsArray = useCallback((elementsArray) => {

    setElementsArray(elementsArray)
    console.log(elementsArray);
  }, []);

  const filteredExpenses = (month, year) => {
    const filterByYear = expenses.filter(
      (expense) => expense.date.getFullYear().toString() === year
    );
    const filterByMonth = filterByYear.filter(
      (expense) => months[expense.date.getMonth()] === month
    );

    return filterByMonth;
  };

  const context = {
    expenses: expenses,
    filteredExpenses: filteredExpenses,
    addData: addDataHandler,

    addElementsArray: addElementsArray,
    elementsArray: elementsArray,
    plača: plača,
    dodajplačo: dodajplačo,
    months: months,
    dodajExpenses: dodajExpenses,
  };
  return (
    <DataContext.Provider value={context}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContext;

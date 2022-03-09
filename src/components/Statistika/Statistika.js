import Card from "../UI/Card";
import { useContext, useState, useEffect, useCallback } from "react";
import "./Statistika.css";
import ExpensesChart from "../Expenses/ExpensesChart";
import ExpensesFilter from "../Expenses/ExpensesFilter";
import DataContext from "../store/data-context";
import ExpenseItem from "../Expenses/ExpenseItem";
const Statistika = (props) => {
  const dataCtx = useContext(DataContext);
  const [filteredYear, setFilteredYear] = useState("2022");
  const [filteredMonth, setFilteredMonth] = useState("Januar");
  const [monthNum, setMonthNum] = useState(0);
  const [plača, setPlača] = useState(0);
  const [skupniStroski, setSkupniStroski] = useState(0);
  let { dodajplačo, addElementsArray } =  dataCtx;

  function filteredYearHandler(currentYear) {
    setFilteredYear(currentYear);
  }

  function dropdownChangeHandler(currentMonth) {
    setFilteredMonth(currentMonth);
    skupniStroskiHandler(currentMonth, filteredYear);
  }

  const skupniStroskiHandler = useCallback(
    (month, year) => {
      const FILTER = dataCtx.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === year
      );
      const FILTER2 = FILTER.filter(
        (expense) => dataCtx.months[expense.date.getMonth()] === month
      );
      
      if (FILTER2.length > 0) {
        const sestevek = FILTER2.map((item) => item.amount).reduce(
          (prev, curr) => prev * 1 + curr * 1
        );
        
        setSkupniStroski(sestevek);
      } else {
        setSkupniStroski(0);
      }
    },
    [dataCtx]
  );

  const plačaHandler= useCallback(
    () => {
      let index = -1;
    for (const expense of dataCtx.months) {
      index = index + 1;
      if (expense === filteredMonth) {
        setMonthNum(index);
      }
    }
    //
    const filter = dataCtx.plača.filter(
      (expense) =>
        expense.month === filteredMonth && expense.year === filteredYear
    );

    if (filter.length > 0) {
      setPlača(filter[0].value);
      console.log(filter[0].value + "hooooooooooruk");
    } else {
      setPlača(0);
      console.log("horuk" + filter)
    }
    

    },[dataCtx, filteredMonth, filteredYear])

  useEffect(() => {
    //LOOPAMO DA DOBIMO MESEC V ŠTEVILKI
    plačaHandler(); 
    skupniStroskiHandler(filteredMonth, filteredYear);
  }, [plačaHandler,skupniStroskiHandler,filteredMonth,filteredYear]);

  useEffect(() => {

    const fetchPlača = async () => {
      const response = await fetch(
        "https://stroskovnik-49bcc-default-rtdb.europe-west1.firebasedatabase.app/user/plača.json"
      );
      const responseData = await response.json();
      const loadedPlača = [];
        
      for (const key in responseData) {
        console.log("plačaaaa" + responseData[key].month)
        loadedPlača.push({
          id: key,
          month: responseData[key].month,
          value: responseData[key].value,
          year: responseData[key].year,
        });
      }
      dodajplačo(loadedPlača);
    };
  
    fetchPlača();
  }, [dodajplačo])



  useEffect(() => {

    const fetchelements = async () => {
      const response = await fetch(
        "https://stroskovnik-49bcc-default-rtdb.europe-west1.firebasedatabase.app/user/elements.json"
      );
      const responseData = await response.json();
      const loadedElements = [];
        
      for (const key in responseData) {
       
        loadedElements.push({id: key, value: responseData[key]});
      }
      
      addElementsArray(loadedElements)
    };
  
    fetchelements();
  }, [addElementsArray])

  return (
    <section>
      <Card className="expenses">
        <h1>Statistika</h1>
        <ExpensesFilter
          selectedYear={filteredYearHandler}
          value={filteredYear}
          selectedMonth={dropdownChangeHandler}
          monthValue={filteredMonth}/>

        <ExpensesChart expenses={dataCtx.expenses} />

        <ul className="expenses-list">
          <ExpenseItem
            key={"Stroški"}
            title={"Skupni stroški"}
            amount={skupniStroski}
            date={new Date(filteredYear, monthNum, 1)}
          />
          <ExpenseItem
            key={"Plača"}
            title={"Plača"}
            amount={plača}
            date={new Date(filteredYear, monthNum, 1)}
          />
        </ul>
      </Card>
    </section>
  );
};
export default Statistika;

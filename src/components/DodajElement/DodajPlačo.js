import Card from "../UI/Card";
import "./DodajPlačo.css";
import { useState, useRef} from "react";
import ExpensesFilter from "../Expenses/ExpensesFilter";
const DodajPlačo = () => {
 
  const PlačaRef = useRef();
  const NadureRef = useRef();
  const RegresRef = useRef();
  const BožičnicaRef = useRef();
  const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("Januar");

  const onCancel = () => {};
  const onSubmit = (event) => {
    event.preventDefault();
    let Plača = PlačaRef.current.value * 1;
    let Nadure = NadureRef.current.value * 1;
    let Regres = RegresRef.current.value * 1;
    let Božičnica = BožičnicaRef.current.value * 1;

    const sestevek = Plača + Nadure + Regres + Božičnica;


    fetch("https://stroskovnik-49bcc-default-rtdb.europe-west1.firebasedatabase.app/user/plača.json",{
      method: "POST",
      body: JSON.stringify({value:sestevek , month:month , year: year})
    });
    PlačaRef.current.value = "";
    NadureRef.current.value = "";
    RegresRef.current.value = "";
    BožičnicaRef.current.value = "";
    window.alert("Uspešno ste dodali plačo ");
    
  };

  const filteredYearHandler = (currentYear) => {
    setYear(currentYear);
  };

  const filteredMonthHandler = (currentMonth) => {
    setMonth(currentMonth);
  }

  return (
    <Card className="expenses">
      <h1>Dodaj plačo</h1>
      <ExpensesFilter selectedYear={filteredYearHandler} selectedMonth= {filteredMonthHandler} value={year} monthValue={month}>
        
      </ExpensesFilter>
      <form onSubmit={onSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Plača (NETO)</label>
            <input ref={PlačaRef} type="number" min="0.01" step="0.01" />
          </div>

          <div className="new-expense__control">
            <label>Nadure (enota: eur)</label>
            <input ref={NadureRef} type="number" />
          </div>

          <div className="new-expense__control">
            <label>Regres</label>
            <input ref={RegresRef} type="number" />
            <div className="new-expense__control">
              <label>Božičnica</label>
              <input ref={BožičnicaRef} type="number" />
            </div>
          </div>
        </div>

        <div className="new-expense__actions">
          <button type="button" onClick={onCancel}>
            Prekliči
          </button>
          <button type="submit">Dodaj element</button>
        </div>
      </form>
    </Card>
  );
};
export default DodajPlačo;

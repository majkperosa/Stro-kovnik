import Card from "../UI/Card";
import "./DodajNoviStrošek.css";
import { useState, useContext } from "react";
import DataContext from "../store/data-context";
const DodajNoviStrošek = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const dataCtx = useContext(DataContext);

  const onCancel = () => {
    setEnteredTitle("");
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (!dataCtx.elementsArray.includes(enteredTitle)) {

      fetch("https://stroskovnik-49bcc-default-rtdb.europe-west1.firebasedatabase.app/user/elements.json",{
        method: "POST",
        body: JSON.stringify(enteredTitle)
      });
      window.alert("Uspešno ste dodali element " + enteredTitle);
    };
    };
  
  

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  return (
    <Card className="expenses">
    <h1>Dodaj strošek (Element)</h1>
      <form onSubmit={onSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Naslov</label>
            <input
              type="text"
              placeholder='"Zavarovanje"'
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
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
export default DodajNoviStrošek;

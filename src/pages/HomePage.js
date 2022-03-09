import React from "react";
import Expenses from "../components/Expenses/Expenses";
import NewExpense from "../components/NewExpense/NewExpense";
import Statistika from "../components/Statistika/Statistika";



const HomePage = () => {
  
  return (
    <div>
      <NewExpense/>
      <Expenses/>
      <Statistika/>
    </div>
  );
};

export default HomePage;

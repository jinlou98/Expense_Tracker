import React, { useState } from "react";

import ExpensesList from "./ExpensesList"
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // the original array is not attacted
  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesList items={filterExpenses}></ExpensesList>
        {/* create a new array based on the original array  */}
        {/* we want array full of expense items  */}
        {/* {expensesContent} */}
      </Card>
    </div>
  );
}

export default Expenses;

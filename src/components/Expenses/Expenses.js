import { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "../../styles/Expenses.css";

const Expenses = (props) => {
  const [pickedYear, setPickedYear] = useState("2022");

  const dropdownYearHandler = (yearFromFilter) => {
    setPickedYear(yearFromFilter);
  };

  return (
    <Card classname="expenses">
      <ExpenseFilter selected={pickedYear} onYearPick={dropdownYearHandler} />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;

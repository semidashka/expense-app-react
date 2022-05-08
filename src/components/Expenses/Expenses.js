import { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "../../styles/Expenses.css";

export default function Expenses(props) {
  const [pickedYear, setPickedYear] = useState("2022");

  const dropdownYearHandler = (yearFromFilter) => {
    setPickedYear(yearFromFilter);
  };

  return (
    <Card classname="expenses">
      <ExpenseFilter selected={pickedYear} onYearPick={dropdownYearHandler} />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
    </Card>
  );
}

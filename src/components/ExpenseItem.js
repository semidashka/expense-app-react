import ExpenseDate from "./ExpenseDate";
import Expense from "./Expense";
import "./styles.css/ExpenseItem.css";

export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <Expense title={props.title} amount={props.amount} />
    </div>
  );
}

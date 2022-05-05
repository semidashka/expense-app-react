export default function Expense(props) {
  const clickHandler = () => {
    console.log("Clicked!");
  };

  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler()}>Change title</button>
    </div>
  );
}

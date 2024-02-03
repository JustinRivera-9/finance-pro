function ExpenseCard({ expense }) {
  const { id, amount, date, description } = expense;
  console.log(expense);
  return (
    <li className="my-4">
      <p>Date: {date}</p>
      <p>Description: {description}</p>
      <p>Amount: {amount}</p>
    </li>
  );
}

export default ExpenseCard;

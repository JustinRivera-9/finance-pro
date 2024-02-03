import ExpenseCard from "./ExpenseCard";

function CategoryAccordian({ category }) {
  const { categoryName, plannedAmount, spentAmount, expenses } = category;

  return (
    <li className="my-4 border-red-500 border-2">
      <p>Category: {categoryName}</p>
      <p>Spent Amount: {spentAmount}</p>
      <div>
        <p>Bar Chart</p>
        <p>Budget Amount: {plannedAmount}</p>
      </div>
      <ul className="my-8">
        {expenses.map((el) => (
          <ExpenseCard key={el.id} expense={el} />
        ))}
      </ul>
    </li>
  );
}

export default CategoryAccordian;

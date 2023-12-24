import { formatCurrency } from "../../../config/helperFunctions";

function BudgetCategoriesTotals({ categories }) {
  const totalIncome = categories
    .filter((el) => el.type === "income")
    .map((el) => el.amount)
    .reduce((acc, cur) => acc + cur, 0);
  const totalExpenses = categories
    .filter((el) => el.type === "expense")
    .map((el) => el.amount)
    .reduce((acc, cur) => acc + cur, 0);
  const net = totalIncome - totalExpenses;

  return (
    <div className="flex justify-between items-center w-10/12">
      <div className="text-center">
        <p className="text-green-300">Total Income</p>
        <p>{formatCurrency(totalIncome)}</p>
      </div>
      <p className="text-2xl">-</p>
      <div className="text-center">
        <p className="text-red-300">Total Expenses</p>
        <p>{formatCurrency(totalExpenses)}</p>
      </div>
      <p className="text-2xl">=</p>
      <div className="text-center">
        <p className="text-blue-500">Net Income</p>
        <p>{formatCurrency(net)}</p>
      </div>
    </div>
  );
}

export default BudgetCategoriesTotals;

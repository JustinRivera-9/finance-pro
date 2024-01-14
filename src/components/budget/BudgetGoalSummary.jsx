import { formatCurrency } from "../../utils/helperFunctions";

function BudgetGoalSummary({ income, expenses }) {
  const totalIncome = income
    .map((el) => el.amount)
    .reduce((acc, cur) => acc + cur, 0);

  const totalExpenses = expenses
    .map((el) => el.amount)
    .reduce((acc, cur) => acc + cur, 0);
  const net = totalIncome - totalExpenses;

  return (
    <div className="flex my-4 px-6 py-2 justify-between items-center w-10/12 md:w-1/2 bg-[#404040] rounded-xl">
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

export default BudgetGoalSummary;
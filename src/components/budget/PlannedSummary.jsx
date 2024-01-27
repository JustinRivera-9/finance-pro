import { formatCurrency } from "../../utils/helperFunctions";

function PlannedSummary({ income, expenses }) {
  const totalIncome = income
    .map((el) => el.amount)
    .reduce((acc, cur) => acc + cur, 0);

  const totalExpenses = expenses
    .map((el) => el.amount)
    .reduce((acc, cur) => acc + cur, 0);
  const net = totalIncome - totalExpenses;

  return (
    <>
      <div className="flex mx-auto my-2 px-6 py-2 justify-between items-center w-10/12 md:w-1/2 bg-[#404040] rounded-xl">
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
      <h2 className="h-[1px] mx-auto bg-stone-500 w-11/12 my-4"></h2>
    </>
  );
}

export default PlannedSummary;
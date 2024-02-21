import { formatCurrency, reduceArr } from "../../../utils/helperFunctions";

function PlannedSummary({ income, expenses, fixed }) {
  const totalIncome = reduceArr(income);
  const totalExpenses = reduceArr(expenses);
  const totalFixed = reduceArr(fixed);
  const net = totalIncome - totalExpenses - totalFixed;

  return (
    <>
      <div className="flex mx-auto my-2 px-4 py-2 justify-between w-[93%] items-center md:w-1/2 bg-[#404040] rounded-xl">
        <div className="text-center">
          <p className="text-green-300">Total Income</p>
          <p>{formatCurrency(totalIncome)}</p>
        </div>
        <p className="text-2xl">-</p>
        <div className="text-center">
          <p className="text-red-300">Total Expenses</p>
          <p>{formatCurrency(totalExpenses + totalFixed)}</p>
        </div>
        <p className="text-2xl">=</p>
        <div className="text-center">
          <p className="text-blue-500">Net Income</p>
          <p className={`${net > 0 ? "text-green-500" : "text-red-400"}`}>
            {formatCurrency(net)}
          </p>
        </div>
      </div>
      <h2 className="h-[1px] mx-auto bg-stone-500 w-11/12 my-4"></h2>
    </>
  );
}

export default PlannedSummary;

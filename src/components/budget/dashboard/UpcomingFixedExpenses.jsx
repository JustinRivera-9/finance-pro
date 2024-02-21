import { formatCurrency } from "../../../utils/helperFunctions";

function UpcomingFixedExpenses({ expenses }) {
  const fixedExpenses = expenses.filter((el) => el.isFixed);
  console.log(fixedExpenses);
  return (
    <div className="flex flex-col bg-[#505050] rounded-xl p-2 md:w-1/3 md:h-fit md:mt-4">
      <p className="text-slate-200 mb-4 text-center text-3xl">
        Upcoming Fixed Expenses
      </p>
      <div className="flex flex-wrap justify-around bg-[#505050] rounded-xl text-xl text-center ">
        {fixedExpenses.map((item) => (
          <ul
            key={item.categoryName}
            className="flex items-center justify-between space-x-2 bg-[#292929] p-4 rounded-xl w-[48%] my-1"
          >
            <li className="text-xl text-center text-[#48ff00] bg-[#494949] rounded-xl w-[30%] p-2">
              {item.fixedDate}
            </li>
            <div className="text-right">
              <li className="text-sm text-slate-300">{item.categoryName}</li>
              <li className="text-slate-200">
                {formatCurrency(item.plannedAmount, true)}
              </li>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default UpcomingFixedExpenses;

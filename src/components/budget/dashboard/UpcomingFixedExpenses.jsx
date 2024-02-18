import { formatCurrency } from "../../../utils/helperFunctions";

function UpcomingFixedExpenses({ expenses }) {
  const fixedExpenses = expenses.filter((el) => el.isFixed);

  return (
    <div className="flex flex-col bg-[#505050] rounded-xl p-2 md:w-1/3 md:h-fit md:mt-4">
      <p className="text-slate-200 mb-4 text-center text-3xl">
        Upcoming Fixed Expenses
      </p>
      <div className="flex flex-wrap justify-around bg-[#505050] rounded-xl text-xl text-center ">
        {fixedExpenses.map((item) => (
          <ul
            key={item.categoryName}
            className="bg-[#292929] px-4 py-2 rounded-xl w-[48%] my-1"
          >
            <li className="text-[#48ff00]">{item.date}</li>
            <li className="text-lg text-slate-300">{item.categoryName}</li>
            <li className="text-slate-200">
              {formatCurrency(item.plannedAmount, true)}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default UpcomingFixedExpenses;

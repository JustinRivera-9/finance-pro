import { formatCurrency } from "../../../utils/helperFunctions";

function UpcomingFixedExpenses({ expenses }) {
  const fixedExpenses = expenses.filter((el) => el.isFixed);

  return (
    <div className="flex flex-col bg-[#505050] rounded-xl p-4 md:w-1/3 md:h-fit md:mt-4">
      <p className="text-slate-200 mb-4 text-center text-3xl">
        Upcoming Fixed Expenses
      </p>
      <div className="flex justify-between bg-[#505050] rounded-xl text-xl text-center">
        {fixedExpenses.map((item) => (
          <div key={item.categoryName} className="bg-[#292929] p-2 rounded-xl">
            <p className="text-[#48ff00]">{item.date}</p>
            <p className="text-xl text-slate-300">{item.categoryName}</p>
            <p className="text-slate-200">
              {formatCurrency(item.plannedAmount)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingFixedExpenses;

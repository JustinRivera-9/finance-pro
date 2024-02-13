import { formatCurrency } from "../../../utils/helperFunctions";

function UpcomingFixedExpenses() {
  const tempData = [
    { categoryName: "Mortgage", amount: 1400, date: "Feb 1" },
    { categoryName: "Car", amount: 395, date: "Feb 5" },
    { categoryName: "Utilities", amount: 125, date: "Feb 14" },
    { categoryName: "Student", amount: 158, date: "Feb 28" },
  ];
  return (
    <div className="flex flex-col bg-[#505050] rounded-xl p-4">
      <p className="text-slate-200 mb-4 text-center text-3xl">
        Upcoming Fixed Expenses
      </p>
      <div className="flex justify-between bg-[#505050] rounded-xl text-xl text-center">
        {tempData.map((item) => (
          <div key={item.categoryName} className="bg-[#292929] p-2 rounded-xl">
            <p className="text-[#48ff00]">{item.date}</p>
            <p className="text-xl text-slate-300">{item.categoryName}</p>
            <p className="text-slate-200">{formatCurrency(item.amount)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingFixedExpenses;

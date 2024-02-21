import { formatCurrency } from "../../../utils/helperFunctions";
import ExpenseCardActions from "./ExpenseCardActions";

function ExpenseCard({ expense }) {
  const { id, amount, date, description } = expense;
  const [month, day] = date.split(" ");

  return (
    <li className="flex mt-2 px-2 py-1 justify-between bg-[#292929] items-center w-full rounded-2xl">
      <div className="flex space-x-3 items-center pl-1">
        <div className="flex flex-col text-slate-300">
          <p className="text-2xl">{day}</p>
          <p>{month}</p>
        </div>
        <p className="text-base text-left">{description}</p>
      </div>
      <div className="flex items-center space-x-1">
        <p className="text-[#48ff00bd] text-xl">{formatCurrency(amount)}</p>
        <ExpenseCardActions expense={expense} />
        {/* <MoreVertIcon /> */}
      </div>
    </li>
  );
}

export default ExpenseCard;

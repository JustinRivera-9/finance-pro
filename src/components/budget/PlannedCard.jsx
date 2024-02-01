import { FaPen as EditIcon } from "react-icons/fa";
import { FaTrashAlt as DeleteIcon } from "react-icons/fa";
import { formatCurrency } from "../../utils/helperFunctions";

function PlannedCard({ budgetData }) {
  const { category, amount, type, id, isFixed, fixedDate } = budgetData;

  // console.log(isFixed);

  return (
    <li className="flex flex-wrap rounded-xl justify-between p-4 text-xl font-normal bg-[#404040] text-stone-200">
      <div className="flex w-1/2 sm:2/3 text-left justify-between">
        <p className="capitalize">{category}</p>
        <p className="">{formatCurrency(amount)}</p>
      </div>
      <div className="flex justify-around w-1/5">
        <button onClick={() => {}}>
          <EditIcon />
        </button>
        <button onClick={() => {}}>
          <DeleteIcon />
        </button>
      </div>
      {isFixed && (
        <p className="text-[1rem] text-green-400">
          Repeats on day {fixedDate} of the month.
        </p>
      )}
    </li>
  );
}

export default PlannedCard;

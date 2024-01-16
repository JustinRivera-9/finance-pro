import { FaPen as EditIcon } from "react-icons/fa";
import { FaTrashAlt as DeleteIcon } from "react-icons/fa";
import { formatCurrency } from "../../utils/helperFunctions";

function BudgetCategoriesCard({ budgetData }) {
  const { category, amount, type, id } = budgetData;

  return (
    <li className="flex rounded-xl justify-between p-4 text-xl font-normal bg-[#404040] text-stone-200">
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
    </li>
  );
}

export default BudgetCategoriesCard;

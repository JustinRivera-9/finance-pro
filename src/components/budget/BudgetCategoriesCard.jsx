import { FaPen } from "react-icons/fa";
import { formatCurrency } from "../../utils/helperFunctions";

function BudgetCategoriesCard({ budgetData }) {
  const { category, amount, type, id } = budgetData;

  return (
    <li className="flex rounded-xl justify-between p-4 text-xl font-normal bg-[#404040] text-stone-200">
      <div className="flex justify-around">
        <p className="capitalize">{category}</p>
        <p className="ml-12">{formatCurrency(amount)}</p>
      </div>
      <button onClick={() => {}}>
        <FaPen />
      </button>
    </li>
  );
}

export default BudgetCategoriesCard;

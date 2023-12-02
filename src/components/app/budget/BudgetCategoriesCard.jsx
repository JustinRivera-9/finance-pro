import { capitalize } from "../../../config/helperFunctions";

function BudgetCategoriesCard({ budgetData }) {
  const { category, amount, type, id } = budgetData;
  const budgetType = type === "Expense" ? "sky-700" : "sky-700";

  return (
    <ul
      key={id}
      className="text-center text-xl border-2 border-sky-500 rounded-xl w-1/5"
    >
      <li className="py-2 text-2xl font-normal bg-sky-500">
        {capitalize(type)}
      </li>
      <li className="">{capitalize(category)}</li>
      <li className="">${amount}</li>
    </ul>
  );
}

export default BudgetCategoriesCard;

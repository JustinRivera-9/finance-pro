import { Button } from "@mui/material";
import { capitalize } from "../../../config/helperFunctions";
import MenuIcon from "../misc/MenuIcon";

function BudgetCategoriesCard({ budgetData }) {
  const { category, amount, type, id } = budgetData;
  const budgetType = type === "Expense" ? "sky-700" : "sky-700";

  return (
    <ul
      key={id}
      className="text-center text-xl border-2 border-sky-500 rounded-xl w-3/12"
    >
      <li className="flex justify-between pl-4 text-2xl font-normal bg-sky-500">
        <p className="">{capitalize(type)}</p>
        <MenuIcon />
      </li>
      <li className="">{capitalize(category)}</li>
      <li className="">${amount}</li>
    </ul>
  );
}

export default BudgetCategoriesCard;

import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

function BudgetCategoriesCard({ budgetData }) {
  const { category, amount, type, id } = budgetData;
  const budgetType = type === "Expense" ? "sky-700" : "sky-700";

  return (
    <li className="flex rounded-xl items-center justify-between px-4 py-4 text-2xl font-normal bg-stone-200 text-stone-600">
      <div className="mr-2">
        <p className="capitalize">{category}</p>
        <p className="">${amount}</p>
      </div>
      <button className="self-start" onClick={() => {}}>
        <RemoveCircleRoundedIcon />
      </button>
    </li>
  );
}

export default BudgetCategoriesCard;

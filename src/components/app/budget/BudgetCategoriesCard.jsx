import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

function BudgetCategoriesCard({ budgetData }) {
  const { category, amount, type, id } = budgetData;
  const budgetType = type === "Expense" ? "sky-700" : "sky-700";

  return (
    <li className="flex rounded-xl items-center justify-between p-4 text-xl font-normal bg-stone-100 text-stone-700">
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

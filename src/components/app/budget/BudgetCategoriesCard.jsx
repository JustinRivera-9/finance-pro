import MenuIcon from "../misc/MenuIcon";

function BudgetCategoriesCard({ budgetData }) {
  const { category, amount, type, id } = budgetData;
  const budgetType = type === "Expense" ? "sky-700" : "sky-700";

  return (
    <li className="flex rounded-xl justify-between  px-4 py-4 text-2xl font-normal bg-stone-200 text-stone-600">
      <div className="float-left">
        <p className="capitalize">{category}</p>
        <p className="">${amount}</p>
      </div>
      <MenuIcon />
    </li>
  );
}

export default BudgetCategoriesCard;

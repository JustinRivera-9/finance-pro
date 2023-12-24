import { Chip, Divider } from "@mui/material";
import BudgetCategoriesCard from "./BudgetCategoriesCard";
import SetUpMessage from "./SetUpMessage";

const boxStyles = "flex flex-wrap justify-center gap-4 my-8 md:w-1/2";

function BudgetCategoriesLayout({ categories, setUp, openForm }) {
  const incomeArr = categories.filter((el) => el.type === "income");
  const expenseArr = categories.filter((el) => el.type === "expense");

  console.log(incomeArr, expenseArr);

  if (!setUp) {
    return <SetUpMessage openForm={openForm} />;
  }

  return (
    <div className="flex flex-col justify-center md:flex-row">
      <h2 className="mx-auto text-stone-700 text-xl border-2 border-red-200 bg-red-200 rounded-full py-2 px-6">
        Expenses
      </h2>
      <ul className={boxStyles}>
        {expenseArr.map((el) => (
          <BudgetCategoriesCard key={el.id} budgetData={el} />
        ))}
      </ul>
      <h2 className="mx-auto text-stone-700 text-xl border-2 border-red-200 bg-red-200 rounded-full py-2 px-6">
        Income
      </h2>
      <ul className={boxStyles}>
        {incomeArr.map((el) => (
          <BudgetCategoriesCard key={el.id} budgetData={el} />
        ))}
      </ul>
    </div>
  );
}

export default BudgetCategoriesLayout;

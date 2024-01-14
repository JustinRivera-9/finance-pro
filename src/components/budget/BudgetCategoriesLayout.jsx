import BudgetCategoriesCard from "./BudgetCategoriesCard";
import SetUpMessage from "./SetUpMessage";
import { Button } from "@mui/material";
import BudgetGoalSummary from "./BudgetGoalSummary";

const boxStyles = "flex flex-col space-y-4 my-4";

function BudgetCategoriesLayout({ budgetGoal, openForm }) {
  const categories = budgetGoal[0].budgetGoals;

  if (!categories) return <SetUpMessage openForm={openForm} />;

  const incomeArr = categories.filter((el) => el.type === "income");
  const expenseArr = categories.filter((el) => el.type === "expense");

  return (
    <div className="flex flex-col mx-auto">
      <BudgetGoalSummary income={incomeArr} expenses={expenseArr} />
      <div className="flex flex-col justify-center sm:flex-row sm:justify-around px-4">
        <div className="sm:w-1/3">
          <h2 className="w-fit mx-auto text-stone-700 text-xl font-semibold bg-green-400 rounded-full py-2 px-14">
            Income
          </h2>
          <ul className={boxStyles}>
            {incomeArr.map((el) => (
              <BudgetCategoriesCard key={el.id} budgetData={el} />
            ))}
          </ul>
        </div>
        <div className="sm:w-1/3">
          <h2 className="w-fit mx-auto text-stone-700 text-xl bg-red-300 rounded-full py-2 px-14 font-semibold">
            Expenses
          </h2>
          <ul className={boxStyles}>
            {expenseArr.map((el) => (
              <BudgetCategoriesCard key={el.id} budgetData={el} />
            ))}
          </ul>
        </div>
        <Button variant="contained" onClick={() => openForm(true)}>
          ADD
        </Button>
      </div>
    </div>
  );
}

export default BudgetCategoriesLayout;

import { Divider } from "@mui/material";
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
      <Divider>Expenses</Divider>
      <ul className={boxStyles}>
        {expenseArr.map((el) => (
          <BudgetCategoriesCard key={el.id} budgetData={el} />
        ))}
      </ul>
      <Divider>Income</Divider>
      <ul className={boxStyles}>
        {incomeArr.map((el) => (
          <BudgetCategoriesCard key={el.id} budgetData={el} />
        ))}
      </ul>
    </div>
  );
}

export default BudgetCategoriesLayout;

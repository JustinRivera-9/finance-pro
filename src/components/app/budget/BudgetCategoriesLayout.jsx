import BudgetCategoriesCard from "./BudgetCategoriesCard";
import SetUpMessage from "./SetUpMessage";

const boxStyles = "w-1/2 flex flex-wrap justify-center space-y-4 space-x-4";

function BudgetCategoriesLayout({ categories, setUp, openForm }) {
  const incomeArr = categories.filter((el) => el.type === "income");
  const expenseArr = categories.filter((el) => el.type === "expense");

  if (!setUp) {
    return <SetUpMessage openForm={openForm} />;
  }

  return (
    <>
      <div className="w-full flex justify-center">
        <div className={boxStyles}>
          {expenseArr.map((el) => {
            return <BudgetCategoriesCard key={el.id} budgetData={el} />;
          })}
        </div>

        <div className={boxStyles}>
          {incomeArr.map((el) => (
            <BudgetCategoriesCard key={el.id} budgetData={el} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BudgetCategoriesLayout;

import BudgetCategoriesCard from "./BudgetCategoriesCard";
import SetUpMessage from "./SetUpMessage";

const boxStyles =
  "w-1/2 flex flex-wrap space-y-4 space-x-4 py-4 border-red-500 border-2";

function BudgetCategoriesLayout({ categories, setUp, openForm }) {
  console.log(categories);

  if (!setUp) {
    return <SetUpMessage openForm={openForm} />;
  }

  return (
    <div className="w-full flex justify-center ">
      <div className={boxStyles}>
        {categories.map((el) => {
          return <BudgetCategoriesCard key={el.id} budgetData={el} />;
        })}
      </div>
      <div className={boxStyles}>
        {categories.map((el) => (
          <BudgetCategoriesCard key={el.id} budgetData={el} />
        ))}
      </div>
    </div>
  );
}

export default BudgetCategoriesLayout;

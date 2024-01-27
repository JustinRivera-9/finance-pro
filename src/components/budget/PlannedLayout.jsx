import PlannedCard from "./PlannedCard";
import SetUpMessage from "./SetUpMessage";
import { Button } from "@mui/material";
import PlannedSummary from "./PlannedSummary";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const boxStyles = "flex flex-col space-y-4 my-4";

function PlannedLayout({ categories, openForm }) {
  const { budgetCategories } = categories[0];

  if (!budgetCategories) return <SetUpMessage openForm={openForm} />;

  const incomeArr = budgetCategories.filter((el) => el.type === "income");
  const expenseArr = budgetCategories.filter((el) => el.type === "expense");

  return (
    <div className="flex flex-col mx-auto">
      <PlannedSummary income={incomeArr} expenses={expenseArr} />
      <div className="flex flex-col sm:flex-row sm:justify-around px-4">
        <div className="sm:w-1/3">
          <h2 className="w-fit mx-auto text-stone-700 text-xl font-semibold bg-green-400 rounded-full py-2 px-14">
            Income
          </h2>
          <ul className={boxStyles}>
            {incomeArr.map((el) => (
              <PlannedCard key={el.id} budgetData={el} />
            ))}
          </ul>
        </div>
        <div className="sm:w-1/3">
          <h2 className="w-fit mx-auto text-stone-700 text-xl bg-red-300 rounded-full py-2 px-14 font-semibold">
            Expenses
          </h2>
          <ul className={boxStyles}>
            {expenseArr.map((el) => (
              <PlannedCard key={el.id} budgetData={el} />
            ))}
          </ul>
        </div>
      </div>
      <Button
        style={{
          width: "fit-content",
          margin: "auto",
          padding: "1rem",
          borderRadius: "1rem",
        }}
        onClick={() => openForm(true)}
      >
        <AddCircleIcon fontSize="large" />
        <span className="ml-2">Add Category</span>
      </Button>
    </div>
  );
}

export default PlannedLayout;

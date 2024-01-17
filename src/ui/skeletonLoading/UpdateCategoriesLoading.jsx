import { Skeleton } from "@mui/material";

function UpdateCategoriesLoading({ className }) {
  return <Skeleton width="360px" height="2064px0px" />;
}

export default UpdateCategoriesLoading;

{
  /* <div className="flex flex-col mx-auto">
  <div className="flex flex-col sm:flex-row sm:justify-around px-4">
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
</div>; */
}

import {
  formatCurrency,
  prepareAverageSpend,
  reduceArr,
} from "../../../utils/helperFunctions";
import BudgetTotalsCard from "./BudgetTotalsCard";

function BudgetTotals({ expenses }) {
  const monthlyBudget = reduceArr(
    expenses.map((el) => {
      return { amount: el.plannedAmount };
    })
  );

  const averageSpend = prepareAverageSpend(expenses);

  return (
    <div className="flex justify-around w-full mx-auto text-center p-4 rounded-xl md:w-fit md:space-x-4 md:h-fit">
      <BudgetTotalsCard amount={formatCurrency(monthlyBudget)}>
        Monthly Budget
      </BudgetTotalsCard>
      <BudgetTotalsCard amount={formatCurrency(averageSpend)}>
        Average Spend
      </BudgetTotalsCard>
      {/* <BudgetTotalsCard amount="$1,875.00">Net Cash Flow</BudgetTotalsCard> */}
    </div>
  );
}

export default BudgetTotals;

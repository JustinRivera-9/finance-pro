import BudgetTotals from "../../../components/budget/overview/BudgetTotals";
import CategorySummaryChart from "../../../components/budget/overview/CategorySummaryChart";
import MonthSummaryChart from "../../../components/budget/overview/MonthSummaryChart";
import UpcomingFixedExpenses from "../../../components/budget/overview/UpcomingFixedExpenses";

function OverviewBudget() {
  return (
    <div className="flex flex-col justify-center mx-auto mt-4 w-11/12 space-y-4 md:flex-row md:flex-wrap md:space-y-0 ">
      <BudgetTotals />
      <MonthSummaryChart />
      <UpcomingFixedExpenses />
      <CategorySummaryChart />
    </div>
  );
}

export default OverviewBudget;

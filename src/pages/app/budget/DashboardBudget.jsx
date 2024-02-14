import BudgetTotals from "../../../components/budget/dashboard/BudgetTotals";
import CategorySummaryChart from "../../../components/budget/dashboard/CategorySummaryChart";
import MonthSummaryChart from "../../../components/budget/dashboard/MonthSummaryChart";
import UpcomingFixedExpenses from "../../../components/budget/dashboard/UpcomingFixedExpenses";
import LoadingSpinner from "../../../ui/LoadingSpinner";

import { getExpenses } from "../../../services/apiExpenses";
import { useContext } from "react";
import { AuthContext } from "../../../utils/context";
import { useQuery } from "@tanstack/react-query";

function DashboardBudget() {
  const userId = useContext(AuthContext);
  const { data, isLoading, error } = useQuery({
    queryKey: ["expenses", userId],
    queryFn: () => getExpenses(userId),
  });

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  if (error) {
    return <h2>There was an error: {error.message}</h2>;
  }

  const expenses = data.expenses;

  return (
    <div className="flex flex-col justify-center mx-auto mt-4 w-11/12 space-y-4 md:flex-row md:flex-wrap md:space-y-0 ">
      <CategorySummaryChart expenses={expenses} />
      <MonthSummaryChart expenses={expenses} />
      <UpcomingFixedExpenses expenses={expenses} />
      <BudgetTotals expenses={expenses} />
    </div>
  );
}

export default DashboardBudget;

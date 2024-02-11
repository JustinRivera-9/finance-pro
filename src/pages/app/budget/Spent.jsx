import CategoryList from "../../../components/budget/spent/CategoryList";

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../utils/context";

import SetUpMessage from "../../../components/budget/spent/SetUpMessage";
import { getExpenses } from "../../../services/apiExpenses";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import SummaryPieChart from "../../../components/budget/spent/SummaryPieChart";
import MonthFilterButton from "../../../components/budget/spent/MonthFilterButton";
import SummaryBarChart from "../../../components/budget/spent/SummaryBarChart";

function Spent() {
  const userId = useContext(AuthContext);

  // QUERY SET UP
  const { data, isLoading, error } = useQuery({
    queryKey: ["expenses", userId],
    queryFn: () => getExpenses(userId),
  });

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  if (error) {
    console.error(error.message);
    return <h2>There was an error in Spent Page</h2>;
  }

  const { expenses } = data;

  return (
    <div className="flex flex-col space-y-4 w-11/12 mx-auto text-center">
      {expenses.length ? (
        <>
          <MonthFilterButton />
          <div className="flex flex-col md:flex-row mx-auto">
            <SummaryPieChart expenses={expenses} />
            <SummaryBarChart expenses={expenses} />
          </div>
          <CategoryList categories={expenses} />
        </>
      ) : (
        <SetUpMessage />
      )}
    </div>
  );
}

export default Spent;

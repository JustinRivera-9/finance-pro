import CategoryList from "../../../components/budget/spent/CategoryList";

import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../../utils/context";

import SetUpMessage from "../../../components/budget/spent/SetUpMessage";
import { getExpenses } from "../../../services/apiExpenses";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import SummaryPieChart from "../../../components/budget/spent/SummaryPieChart";
import MonthFilterButton from "../../../components/budget/spent/MonthFilterButton";
import SummaryBarChart from "../../../components/budget/spent/SummaryBarChart";
import { monthFilterExpenseData } from "../../../utils/helperFunctions";

function Spent() {
  const [monthFilter, setMonthFilter] = useState("Feb");
  const userId = useContext(AuthContext);

  // QUERY SET UP
  const { data, isLoading, error } = useQuery({
    queryKey: ["expenses", userId, monthFilter],
    queryFn: () => getExpenses(userId, monthFilter),
  });

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  if (error) {
    console.error(error.message);
    return <h2>There was an error in Spent Page</h2>;
  }

  const { expenses: fullExpenses } = data;
  const expenses = monthFilterExpenseData(fullExpenses, monthFilter);

  return (
    <div className="flex flex-col space-y-4 w-11/12 mx-auto text-center">
      {fullExpenses.length ? (
        <>
          <MonthFilterButton
            monthFilter={monthFilter}
            setMonthFilter={setMonthFilter}
          />
          <div className="flex flex-col space-y-10 md:space-y-0 md:w-full md:flex-row md:justify-between mx-auto">
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

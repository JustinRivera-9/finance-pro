import CategoryList from "../../../components/budget/spent/CategoryList";

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { AuthContext } from "../../../utils/context";
import { getExpenses } from "../../../services/apiExpenses";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import { expenseArrayMutation } from "../../../utils/helperFunctions";

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

  console.log(expenses);
  return (
    <div className="flex flex-col space-y-4 w-11/12 mx-auto text-center">
      {/* MONTH FILTER COMPONENT */}
      <p>January 2024</p>
      <div className="flex justify-between">
        {/* CHART COMPONENT */}
        <p>Chart</p>
        <p>Chart Legend</p>
      </div>
      <CategoryList categories={expenses} />
      <div>Add Expense Form</div>
    </div>
  );
}

export default Spent;

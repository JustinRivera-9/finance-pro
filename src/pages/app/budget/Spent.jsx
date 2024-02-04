import CategoryList from "../../../components/budget/spent/CategoryList";

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { AuthContext } from "../../../utils/context";
import { getExpenses } from "../../../services/apiExpenses";
import LoadingSpinner from "../../../ui/LoadingSpinner";

const tempData = [
  {
    categoryName: "Date Night",
    plannedAmount: 250,
    spentAmount: 105.35,
    expenses2024: [
      {
        id: 1,
        date: "Jan 18",
        amount: 34.56,
        description: "Pizza night at pietras",
      },
      {
        id: 2,
        date: "Jan 6",
        amount: 54.21,
        description: "Mini golf at PuttPutt",
      },
      {
        id: 3,
        date: "Jan 25",
        amount: 75.94,
        description: "Dinner at Your Neighbor Felix",
      },
    ],
  },
  {
    categoryName: "Beer",
    plannedAmount: 125,
    spentAmount: 24.56,
    expenses2024: [
      {
        id: 1,
        date: "Jan 9",
        amount: 38.45,
        description: "Denver beer co",
      },
      {
        id: 2,
        date: "Jan 6",
        amount: 54.21,
        description: "Mini golf at PuttPutt",
      },
    ],
  },
  {
    categoryName: "Zoe",
    plannedAmount: 60,
    spentAmount: 0,
    expenses2024: [],
  },
];

function Spent() {
  const userId = useContext(AuthContext);

  // QUERY SET UP
  const {
    data: { expenses },
    isLoading,
    error,
  } = useQuery({
    queryKey: ["expenses", userId],
    queryFn: () => getExpenses(userId),
  });

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  if (error) {
    return <h2>There was an error</h2>;
  }

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

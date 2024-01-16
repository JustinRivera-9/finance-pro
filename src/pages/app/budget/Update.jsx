import UpdateForm from "../../../components/budget/UpdateForm";
import { useState } from "react";
import LoadingSpinner from "../../../ui/LoadingSpinner.jsx";
import BudgetCategoriesLayout from "../../../components/budget/BudgetCategoriesLayout";
import { useQuery } from "@tanstack/react-query";
import { getBudgetCategories } from "../../../services/apiBudget.js";

function Update({ userId }) {
  const [formOpen, setFormOpen] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["budgetGoals", userId],
    queryFn: () => getBudgetCategories(userId),
  });

  console.log(data, isLoading, error);

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  if (error) {
    return <h2>There was an error: {error}</h2>;
  }

  return (
    <div className="w-full mt-6">
      <BudgetCategoriesLayout openForm={setFormOpen} budgetGoal={data} />
      {formOpen && <UpdateForm formOpen={formOpen} setFormOpen={setFormOpen} />}
    </div>
  );
}
export default Update;

// Add snackbar when editing or deleting

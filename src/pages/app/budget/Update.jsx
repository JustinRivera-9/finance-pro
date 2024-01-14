import SetUpMessage from "../../../components/budget/SetUpMessage";
import UpdateForm from "../../../components/budget/UpdateForm";
import { Button } from "@mui/material";
import { useState } from "react";
import LoadingSpinner from "../../../ui/LoadingSpinner.jsx";
import BudgetCategoriesLayout from "../../../components/budget/BudgetCategoriesLayout";
import BudgetCategoriesTotals from "../../../components/budget/BudgetGoalSummary.jsx";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "@tanstack/react-query";
import { getBudgetGoal } from "../../../services/budget/apiBudgetGoal.js";

function Update({ userId }) {
  const [formOpen, setFormOpen] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["budgetGoals", userId],
    queryFn: () => getBudgetGoal(userId),
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

import SetUpMessage from "../../../components/app/budget/SetUpMessage";
import UpdateForm from "../../../components/app/budget/UpdateForm";
import { Button, Skeleton } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import useGetTargetBudget from "../../../hooks/supabase/useGetTargetBudget";
import LoadingSpinner from "../../../components/app/misc/LoadingSpinner";
import CardBudgetItem from "../../../components/app/budget/CardBudgetItem";
// import readTargetBudget from "../../../config/supabase/readTargetBudget.js";

function Update({ userId }) {
  // Need to memoize useGetTargetBudget hook call
  const { data, isLoading, error } = useGetTargetBudget(userId);
  const [formOpen, setFormOpen] = useState(false);

  // Checks loading state. Update to be skeleton loading
  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  // form submit handler
  function handleAddCategory(formData) {
    const { category, amount, type } = formData;
    console.log(category, amount, type);
  }

  const { budgetSetUp, totalAnticipated, categories } = data;

  return (
    <div className="flex justify-center mt-24">
      {/* Checks if anticipated budget exists */}
      {!budgetSetUp && <SetUpMessage openForm={setFormOpen} />}

      {/* checks if form is open */}
      {formOpen && (
        <UpdateForm
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          onSubmit={handleAddCategory}
        />
      )}

      {/* maps over array of budget items */}
      {data.categories.map((el) => {
        return (
          <ul key={el.id}>
            <CardBudgetItem budgetData={el} />
          </ul>
        );
      })}

      {/* Shows different button once budget is setup */}
      {!formOpen && budgetSetUp ? (
        <Button onClick={() => setFormOpen(true)}>ADD</Button>
      ) : null}
    </div>
  );
}

export default Update;

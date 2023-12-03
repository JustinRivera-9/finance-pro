import SetUpMessage from "../../../components/app/budget/SetUpMessage";
import UpdateForm from "../../../components/app/budget/UpdateForm";
import { Button, Skeleton } from "@mui/material";
import { useState } from "react";
import useGetBudgetCategories from "../../../hooks/supabase/useGetBudgetCategories";
import LoadingSpinner from "../../../components/app/misc/LoadingSpinner";
import BudgetCategoriesLayout from "../../../components/app/budget/BudgetCategoriesLayout";
import BudgetCategoriesTotals from "../../../components/app/budget/BudgetCategoriesTotals";

function Update({ userId }) {
  // Need to memoize useGetTargetBudget hook call
  const { data, isLoading, error } = useGetBudgetCategories(userId);
  const [formOpen, setFormOpen] = useState(false);

  // Checks loading state. Update to be skeleton loading
  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  // Checks if budget exists. False - returns set up budget page
  if (!data.budgetSetUp && !formOpen) {
    return <SetUpMessage openForm={setFormOpen} />;
  }

  // form submit handler - NEED TO SET DATA
  function handleAddCategory(formData) {
    const { category, amount, type } = formData;
    console.log(category, amount, type);
  }

  // Checks if budgetSetUp is false and prevents mapping through undefined
  if (formOpen) {
    return (
      <UpdateForm
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        onSubmit={handleAddCategory}
      />
    );
  }

  const { budgetSetUp, categories } = data;

  return (
    <div className="flex flex-col items-center">
      {/* UI layout for catgeories */}
      <div className="w-full flex-row justify-center my-8">
        <BudgetCategoriesLayout
          setUp={budgetSetUp}
          categories={categories}
          openForm={setFormOpen}
        />
      </div>

      {/* Shows different button once budget is setup */}
      {!formOpen && budgetSetUp && (
        <Button
          style={{ fontSize: "1.5rem" }}
          onClick={() => setFormOpen(true)}
        >
          ADD
        </Button>
      )}
      <BudgetCategoriesTotals categories={categories} />
    </div>
  );
}

export default Update;

// Add snackbar when editing or deleting.

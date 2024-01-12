import SetUpMessage from "../../../components/budget/SetUpMessage";
import UpdateForm from "../../../components/budget/UpdateForm";
import { Button } from "@mui/material";
import { useState } from "react";
import useGetBudgetCategories from "../../../services/useGetBudgetCategories";
import LoadingSpinner from "../../../ui/LoadingSpinner.jsx";
import BudgetCategoriesLayout from "../../../components/budget/BudgetCategoriesLayout";
import BudgetCategoriesTotals from "../../../components/budget/BudgetCategoriesTotals";
import { v4 as uuidv4 } from "uuid";

function Update({ userId }) {
  // Need to memoize useGetTargetBudget hook call
  const { data, isLoading, error } = useGetBudgetCategories(userId);
  const [formOpen, setFormOpen] = useState(false);

  // form submit handler - NEED TO SET DATA
  async function handleAddCategory(formData) {
    const { category, amount, type } = formData;

    // Check if data is available
    if (data && data.categories) {
      const updatedCategories = [
        ...data.categories,
        { id: uuidv4(), category, amount, type },
      ];
      const JSONcategories = JSON.stringify(updatedCategories);

      // const { data, error } = await supabase
      //   .from("budget")
      //   .update({ categories })
      //   .eq("user_id", userId);

      // console.log(data, error);
    }
  }

  // Checks loading state. Update to be skeleton loading
  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  // Checks if budget exists & form closed. False - returns set up budget page
  if (!data.budgetSetUp && !formOpen) {
    return <SetUpMessage openForm={setFormOpen} />;
  }

  // Check to prevent mapping through undefined
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
      <div className="w-full mt-6">
        <BudgetCategoriesLayout
          setUp={budgetSetUp}
          categories={categories}
          openForm={setFormOpen}
        />
      </div>

      {/* Shows different button once budget is setup */}
      {!formOpen && budgetSetUp && (
        <Button variant="contained" onClick={() => setFormOpen(true)}>
          ADD
        </Button>
      )}
      <h2 className="h-[2px] my-8 bg-stone-200 w-11/12"></h2>
      <BudgetCategoriesTotals categories={categories} />
    </div>
  );
}

export default Update;

// Add snackbar when editing or deleting.

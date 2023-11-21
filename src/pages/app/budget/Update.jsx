import SetUpMessage from "../../../components/app/budget/SetUpMessage";
import UpdateForm from "../../../components/app/budget/UpdateForm";
import { Button } from "@mui/material";
import { useState } from "react";

function Update({ userData }) {
  const [formOpen, setFormOpen] = useState(false);
  const [categories, setCategories] = useState(userData.categories);
  const { budgetSetUp, totalAnticipated, totalActual } = userData;

  function handleAddCategory(formData) {
    userData.budgetSetUp = true;
    setCategories((prev) => [...prev, formData]);
    userData.categories = categories;
  }
  console.log(userData.categories);

  return (
    <div className="flex justify-center mt-24">
      {!budgetSetUp && <SetUpMessage openForm={setFormOpen} />}
      {formOpen && (
        <UpdateForm
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          onSubmit={handleAddCategory}
        />
      )}
      {userData.categories.map((el, i) => {
        return (
          <div key={i}>
            <div>Category: {el.category}</div>
            <div>Amount: ${el.amount}</div>
            <div>Type: {el.type}</div>
          </div>
        );
      })}
      {!formOpen || budgetSetUp ? (
        <Button onClick={() => setFormOpen(true)}>ADD</Button>
      ) : null}
    </div>
  );
}

export default Update;

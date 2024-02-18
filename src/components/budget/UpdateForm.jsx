import { Backdrop, Button, TextField } from "@mui/material";
import { useState } from "react";
import SelectInput from "../../ui/SelectInput";
import TextInput from "../../ui/TextInput";

function PlannedForm({ formOpen, setFormOpen }) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = { category, amount, type };
    setFormOpen(false);
    resetForm();

    // console.log(category, amount, type);
  }

  function handleCancel() {
    setFormOpen(false);
    resetForm();
  }

  function resetForm() {
    setCategory("");
    setAmount("");
    setType("Expense");
  }

  return (
    <Backdrop open={formOpen}>
      <div className="flex flex-col bg-[#303030] p-8 rounded-xl">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <TextInput type="text" setValue={setCategory} isRequired={true}>
            Category
          </TextInput>
          <TextInput type="number" setValue={setAmount} isRequired={true}>
            Amount
          </TextInput>
          <SelectInput setValue={setType} options={["expense", "income"]}>
            Type
          </SelectInput>
          <Button
            variant="contained"
            type="submit"
            sx={{ marginTop: "1.5rem" }}
          >
            ADD
          </Button>
          <Button sx={{ marginTop: ".75rem" }} onClick={handleCancel}>
            Cancel
          </Button>
        </form>
      </div>
    </Backdrop>
  );
}

export default PlannedForm;

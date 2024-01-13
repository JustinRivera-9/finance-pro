import {
  Backdrop,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

function UpdateForm({ formOpen, setFormOpen, onSubmit }) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");

  function handleForm(e) {
    e.preventDefault();
    onSubmit({ category, amount, type });
    setFormOpen(false);
    resetForm();
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
        <form className="flex flex-col" onSubmit={handleForm}>
          <TextField
            sx={{ marginTop: "1.5rem" }}
            required
            id="outlined-required"
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
          <TextField
            sx={{ marginTop: "1.5rem" }}
            required
            id="outlined-required"
            type="number"
            label="Amount"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
          <FormControl required sx={{ marginTop: "1.5rem" }}>
            <InputLabel id="type">Type</InputLabel>
            <Select
              label="type"
              id="type"
              value={type}
              input={<OutlinedInput label="type" id="type" />}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="Expense">Expense</MenuItem>
              <MenuItem value="Income">Income</MenuItem>
            </Select>
          </FormControl>

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

export default UpdateForm;

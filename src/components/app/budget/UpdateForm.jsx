import {
  Backdrop,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useState } from "react";

function UpdateForm({ formOpen, setFormOpen, onSubmit }) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");

  function handleForm(e) {
    e.preventDefault();
    setFormOpen(false);
    onSubmit({ category, amount, type });
  }

  return (
    <Backdrop open={formOpen}>
      <div className="flex flex-col bg-white p-12 rounded-xl">
        <form className="flex flex-col space-y-8" onSubmit={handleForm}>
          <FormControl required>
            <InputLabel id="category">Category</InputLabel>
            <Input
              //   labelId="category"
              label="category"
              id="outlined-basic"
              variant="outlined"
              value={category}
              input={<OutlinedInput label="category" id="category" />}
              onChange={(e) => setCategory(e.target.value)}
            />
          </FormControl>
          <FormControl required>
            <InputLabel id="amount">Amount (Monthly)</InputLabel>
            <Input
              //   labelId="category"
              label="amount"
              id="outlined-basic"
              variant="outlined"
              type="number"
              value={amount}
              input={<OutlinedInput label="amount" id="amount" />}
              onChange={(e) => setAmount(e.target.value)}
            />
          </FormControl>
          <FormControl required>
            <InputLabel id="type">Type</InputLabel>
            <Select
              //   labelId="type"
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

          <Button variant="contained" type="submit">
            ADD
          </Button>
        </form>
      </div>
    </Backdrop>
  );
}

export default UpdateForm;

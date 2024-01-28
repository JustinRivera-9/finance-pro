import {
  Backdrop,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { createNewArray } from "../../utils/helperFunctions";

function PlannedForm({ formOpen, setFormOpen }) {
  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      category: "",
      amount: "",
      type: "",
      isFixed: false,
      fixedDate: "",
    },
  });

  const onError = (errors) => {
    console.log(errors);
  };

  const onCancel = () => {
    setFormOpen(false);
    reset();
  };

  const onSubmit = (data) => {
    console.log(data);
    setFormOpen(false);
    reset();
  };

  return (
    <Backdrop open={formOpen}>
      <div className="flex flex-col bg-[#303030] p-8 rounded-xl">
        <form
          className="flex flex-col"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          {/* CATEGORY INPUT */}
          <TextField
            sx={{ marginTop: "1.5rem" }}
            id="outlined"
            type="text"
            label="Category"
            required
            {...register("category")}
          />

          {/* AMOUNT INPUT */}
          <TextField
            sx={{ marginTop: "1.5rem" }}
            id="outlined"
            type="number"
            label="Amount"
            required
            {...register("amount")}
          />

          {/* TYPE INPUT */}
          <FormControl required sx={{ marginTop: "1.5rem" }}>
            <InputLabel id="type">Type</InputLabel>
            <Select
              id="type"
              input={<OutlinedInput label="Type" id="type" />}
              {...register("type")}
            >
              <MenuItem value="income">Income</MenuItem>
              <MenuItem value="expense">Expense</MenuItem>
            </Select>
          </FormControl>

          {/* IS FIXED CHECKBOX */}
          {dirtyFields.type && (
            <FormGroup sx={{ marginTop: "0.75rem" }}>
              <FormControlLabel
                control={<Checkbox size="medium" {...register("isFixed")} />}
                label="Is this a fixed expense?"
              />
            </FormGroup>
          )}

          {/* FIXED DATE INPUT */}
          {dirtyFields.isFixed && (
            <FormControl required sx={{ marginTop: "0.75rem" }}>
              <InputLabel id="fixedDate">Day of month</InputLabel>
              <Select
                id="fixedDate"
                input={<OutlinedInput label="Day of month" id="fixedDate" />}
                {...register("fixedDate")}
              >
                {createNewArray(32).map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          <Button variant="contained" type="submit" sx={{ marginTop: "1rem" }}>
            ADD
          </Button>
          <Button onClick={onCancel} sx={{ marginTop: ".75rem" }}>
            Cancel
          </Button>
        </form>
      </div>
    </Backdrop>
  );
}

export default PlannedForm;

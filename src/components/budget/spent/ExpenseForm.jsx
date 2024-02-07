import { Backdrop, Button, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ExpenseForm({
  formOpen,
  setFormOpen,
  categoryName,
  expenseToEdit = {},
}) {
  const [isEdit, setIsEdit] = useState(Boolean(expenseToEdit.id));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = { ...data, categoryName, id: uuidv4() };
    console.log(formData);
    setFormOpen(false);
    reset();
  };
  const onError = (error) => console.error(error);
  const onCancel = () => {
    setFormOpen(false);
    reset();
  };

  return (
    <Backdrop
      open={formOpen}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <div className="flex flex-col bg-[#303030] p-8 rounded-xl">
        <form
          className="flex flex-col"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          {/* CATEGORY INPUT */}
          <TextField
            sx={{ marginTop: "1.5rem" }}
            id="outlined"
            type="number"
            label="Amount"
            error={errors.amount?.type}
            helperText={errors?.amount?.message}
            {...register("amount", {
              required: "This field is required",
              min: {
                value: 1,
                message: "Amount should be at least 1",
              },
            })}
          />

          {/* AMOUNT INPUT */}
          <TextField
            sx={{ marginTop: "1rem" }}
            id="outlined"
            type="text"
            label="Description"
            error={errors.description?.type}
            helperText={errors?.description?.message}
            {...register("description", {
              required: "This field is required",
            })}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              defaultValue={dayjs()}
              sx={{ marginTop: "1rem" }}
              {...register("date")}
            />
          </LocalizationProvider>

          <Button
            // disabled={isAdding}
            variant="contained"
            type="submit"
            sx={{ marginTop: "1rem" }}
          >
            {isEdit ? "UPDATE" : "ADD"}
          </Button>
          <Button onClick={onCancel} sx={{ marginTop: ".75rem" }}>
            Cancel
          </Button>
        </form>
      </div>
    </Backdrop>
  );
}

export default ExpenseForm;

import { Backdrop, Button, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";

import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../utils/context";
import { v4 as uuidv4 } from "uuid";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addExpense } from "../../../services/apiExpenses";
import toast from "react-hot-toast";
import { formatExpenseDate } from "../../../utils/helperFunctions";

const defaultFormValues = {
  amount: "",
  categoryName: "",
  date: dayjs(),
  description: "",
  id: uuidv4(),
};

function ExpenseForm({
  formOpen,
  setFormOpen,
  categoryName,
  expenseToEdit = {},
}) {
  // Checks if adding or editing
  const userId = useContext(AuthContext);
  const [isEdit, setIsEdit] = useState(Boolean(expenseToEdit.id) || false);

  // FORM
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: expenseToEdit ? expenseToEdit : defaultFormValues,
  });

  const queryClient = useQueryClient();
  // GET EXPENSES FROM CACHE FOR MUTATION
  const queryCache = queryClient.getQueryCache();
  const expenses = queryCache
    .getAll()
    .find((query) => query.queryKey[0] === "expenses")?.state?.data?.expenses;

  // QUERY MUTATION -- Maybe refetch ILO invalidate to fix edit query
  const { mutate, isLoading: isAdding } = useMutation({
    mutationFn: addExpense,
    onSuccess: () => {
      toast.success(
        isEdit ? "Successfully updated expense" : "Expense successfully added"
      );
      queryClient.invalidateQueries({
        queryKey: ["expenses", userId],
      });
      reset();
      setFormOpen(false);
    },
    onError: (err) => {
      toast.error(
        isEdit
          ? "There was an issue updating the expense. Please try again."
          : "There was an issue adding the new expense. Please try again."
      );
      console.error(err);
    },
  });

  // MUTATE ON SUBMIT
  const onSubmit = (data) => {
    const newExpense = {
      ...data,
      date: formatExpenseDate(dayjs(data.date).toString()),
      categoryName: categoryName || expenseToEdit.categoryName,
      id: data.id || uuidv4(),
    };
    mutate({ expenses, newExpense, userId });
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
          {/* AMOUNT INPUT */}
          <TextField
            sx={{ marginTop: "1.5rem" }}
            id="outlined"
            type="number"
            label="Amount"
            inputProps={{ step: "0.01" }}
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

          {/* DESCRIPTION INPUT */}
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

          {/* DATE PICKER */}
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

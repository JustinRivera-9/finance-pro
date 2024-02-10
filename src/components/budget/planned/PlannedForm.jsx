import {
  Backdrop,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";

import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import { AuthContext } from "../../../utils/context";
import { createNewArray } from "../../../utils/helperFunctions";
import { addPlannedCategory } from "../../../services/apiPlanned";

const defaultFormValues = {
  category: "",
  amount: "",
  type: "income",
  isFixed: false,
  fixedDate: "",
  id: "",
};

function PlannedForm({ formOpen, setFormOpen, categoryToEdit = {} }) {
  const [isEdit, setIsEdit] = useState(Boolean(categoryToEdit.id));

  const userId = useContext(AuthContext);
  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: categoryToEdit
      ? { ...categoryToEdit, type: "", isFixed: false, fixedDate: "" }
      : defaultFormValues,
  });

  // REACT QUERY MUTATIONS
  const queryClient = useQueryClient();
  const { mutate, isLoading: isAdding } = useMutation({
    mutationFn: addPlannedCategory,

    onSuccess: () => {
      toast.success(
        isEdit
          ? "Successfully updated budget category"
          : "New budget category created"
      );
      queryClient.invalidateQueries({ queryKey: ["planned", userId] });
      setFormOpen(false);
      reset();
    },

    onError: (err) => {
      toast.error(
        isEdit
          ? "There was an issue updating the category. Please try again."
          : "There was an issue adding the new category. Please try again."
      );
      console.error(err);
    },
  });

  // FORM HANDLER FUNCTIONS
  // TO DO - Find id in apiPlanned and replace that index with updated object
  const onSubmit = (data) =>
    mutate([
      {
        ...data,
        isFixed: Boolean(data.isFixed),
        amount: Number(data.amount),
        id: data.id || uuidv4(),
      },
      userId,
    ]);

  const onError = (errors) => console.log(errors);
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
            type="text"
            label="Category"
            error={errors.category}
            helperText={errors?.category?.message}
            {...register("category", {
              required: "This field is required",
            })}
          />

          {/* AMOUNT INPUT */}
          <TextField
            sx={{ marginTop: "1.5rem" }}
            id="outlined"
            type="number"
            label="Amount"
            error={errors.amount}
            helperText={errors?.amount?.message}
            {...register("amount", {
              required: "This field is required",
              min: {
                value: 1,
                message: "Amount should be at least 1",
              },
            })}
          />

          {/* TYPE INPUT */}
          <FormControl sx={{ marginTop: "1.5rem" }}>
            <InputLabel sx={errors.type && { color: "#D73A3A" }} id="type">
              Type
            </InputLabel>
            <Select
              error={errors.type}
              id="type"
              input={<OutlinedInput label="Type" id="type" />}
              {...register("type", {
                required: "This field is required",
              })}
            >
              <MenuItem value="income">Income</MenuItem>
              <MenuItem value="expense">Expense</MenuItem>
            </Select>
            {errors.type && (
              <FormHelperText sx={{ color: "#D73A3A" }}>
                {errors?.type?.message}
              </FormHelperText>
            )}
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
            <FormControl sx={{ marginTop: "0.75rem" }}>
              <InputLabel
                sx={errors.fixedDate && { color: "#D73A3A" }}
                id="fixedDate"
              >
                Day of month
              </InputLabel>
              <Select
                error={errors.fixedDate}
                id="fixedDate"
                input={<OutlinedInput label="Day of month" id="fixedDate" />}
                {...register("fixedDate", {
                  required: "This field is required",
                })}
              >
                {createNewArray(32).map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              {errors.fixedDate && (
                <FormHelperText sx={{ color: "#D73A3A" }}>
                  {errors?.fixedDate?.message}
                </FormHelperText>
              )}
            </FormControl>
          )}

          <Button
            disabled={isAdding}
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

export default PlannedForm;

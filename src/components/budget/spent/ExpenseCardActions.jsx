import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useContext, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteExpense } from "../../../services/apiExpenses";
import toast from "react-hot-toast";
import { AuthContext } from "../../../utils/context";

const options = ["Edit", "Delete"];

const ITEM_HEIGHT = 48;

export default function ExpenseCardActions({ expense }) {
  const userId = useContext(AuthContext);
  const [formOpen, setFormOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const queryClient = useQueryClient();
  // GET EXPENSES FROM CACHE FOR MUTATION
  const queryCache = queryClient.getQueryCache();
  const expenses = queryCache
    .getAll()
    .find((query) => query.queryKey[0] === "expenses")?.state?.data?.expenses;

  const { mutate, isLoading: isDeleting } = useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      toast.success("Expense successfully deleted.");
      queryClient.invalidateQueries({ queryKey: ["expenses", userId] });
    },

    onError: (err) => {
      toast.error("There was an issue deleting the expense. Please try again.");
      console.error(err.message);
    },
  });

  const handleClose = (e) => {
    setAnchorEl(null);
    if (e.target.textContent === "Edit") setFormOpen(true);
    if (e.target.textContent === "Delete")
      mutate({ expenses, expense, userId });
  };

  return (
    <>
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
      {formOpen && (
        <ExpenseForm
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          expenseToEdit={expense}
          categoryName={expense.categoryName}
        />
      )}
    </>
  );
}

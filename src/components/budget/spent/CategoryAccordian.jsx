import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { useState } from "react";

import CategoryProgressBar from "../../../ui/AccordianProgressBar";
import ExpenseCard from "./ExpenseCard";
import CategoryTitle from "./AccordianTitle";

function CategoryAccordian({ category }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const { plannedAmount, spentAmount, expenses2024: expenses } = category;

  return (
    <li className="flex flex-col space-y-2 py-4 items-center bg-[#404040] rounded-xl">
      <CategoryTitle info={category} isOpen={isOpen} setIsOpen={setIsOpen} />
      <CategoryProgressBar planned={plannedAmount} spent={spentAmount} />
      {isOpen && (
        <ul className="flex flex-col space-y-2 w-full px-4">
          {expenses.map((el) => (
            <ExpenseCard key={el.id} expense={el} />
          ))}
          <Button
            variant="outlined"
            // variant="contained"
            style={{
              width: "fit-content",
              margin: "auto",
              marginTop: ".70rem",
              padding: ".35rem .75rem",
              borderRadius: "2rem",
            }}
            onClick={() => openForm(true)}
          >
            <AddCircleIcon fontSize="medium" />
            <span className="ml-2">Add Expense</span>
          </Button>
        </ul>
      )}
    </li>
  );
}

export default CategoryAccordian;

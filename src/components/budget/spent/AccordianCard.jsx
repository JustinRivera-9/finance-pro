import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CategoryProgressBar from "../../../ui/AccordianProgressBar";
import ExpenseCard from "./ExpenseCard";
import CategoryTitle from "./AccordianTitle";
import ExpenseForm from "./ExpenseForm";

import { useState } from "react";

function AccordianCard({ data }) {
  // data should be obj --> This component is the return from the parent component looping through an array

  const [formOpen, setFormOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Update destructured variable names
  const { plannedAmount, spentAmount, expenses2024: expenses } = data;

  return (
    <li className="flex flex-col space-y-2 py-4 items-center bg-[#404040] rounded-xl md:w-2/5 md:h-fit">
      <CategoryTitle info={data} isOpen={isOpen} setIsOpen={setIsOpen} />
      <CategoryProgressBar planned={plannedAmount} spent={spentAmount} />
      {isOpen && (
        <ul className="flex flex-col space-y-2 w-full px-4">
          {expenses.map((el) => (
            <ExpenseCard key={el.id} expense={el} />
          ))}
          <Button
            // variant="outlined"
            variant="contained"
            style={{
              width: "fit-content",
              margin: "auto",
              marginTop: ".70rem",
              fontWeight: "bold",
              borderWidth: "2px",
              padding: ".35rem .75rem",
              borderRadius: "2rem",
            }}
            onClick={() => setFormOpen(true)}
          >
            <AddCircleIcon fontSize="medium" />
            <span className="ml-2">Add Expense</span>
          </Button>
        </ul>
      )}
      {formOpen && (
        <ExpenseForm
          categoryName={data.categoryName}
          formOpen={formOpen}
          setFormOpen={setFormOpen}
        />
      )}
    </li>
  );
}

export default AccordianCard;

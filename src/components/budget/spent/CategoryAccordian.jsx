import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { useState } from "react";

import CategoryProgressBar from "./AccordianProgressBar";
import { formatCurrency } from "../../../utils/helperFunctions";
import ExpenseCard from "./ExpenseCard";
import CategoryTitle from "./AccordianTitle";

function CategoryAccordian({ category }) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    categoryName,
    plannedAmount,
    spentAmount,
    expenses2024: expenses,
  } = category;

  return (
    <li className="flex flex-col space-y-2 py-4 items-center bg-[#404040] rounded-xl">
      <CategoryTitle info={category} isOpen={isOpen} setIsOpen={setIsOpen} />
      <CategoryProgressBar planned={plannedAmount} spent={spentAmount} />
      {isOpen && (
        <ul className="flex flex-col space-y-2 w-full px-4">
          {expenses.map((el) => (
            <ExpenseCard key={el.id} expense={el} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default CategoryAccordian;

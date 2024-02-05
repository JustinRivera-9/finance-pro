import { useState } from "react";

import CategoryProgressBar from "./AccordianProgressBar";
import ExpenseCard from "./ExpenseCard";
import CategoryTitle from "./AccordianTitle";

function CategoryAccordian({ category }) {
  const [isOpen, setIsOpen] = useState(false);
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
        </ul>
      )}
    </li>
  );
}

export default CategoryAccordian;

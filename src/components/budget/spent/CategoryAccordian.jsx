import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { useState } from "react";

import { formatCurrency } from "../../../utils/helperFunctions";
import ExpenseCard from "./ExpenseCard";

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
      <div className="flex justify-between w-full">
        <div className="flex justify-around items-baseline space-x-4">
          <p className="text-2xl pl-4 capitalize">{categoryName}</p>
          <p className="text-[#48ff00c2] text-xl">
            Spent: {formatCurrency(spentAmount)}
          </p>
        </div>
        <button onClick={() => setIsOpen((show) => !show)} className="pr-4">
          {isOpen ? (
            <RemoveCircleIcon color="primary" />
          ) : (
            <AddCircleIcon color="primary" />
          )}
        </button>
      </div>
      <div className="flex justify-around items-center w-full">
        <div className="h-5 bg-[#48ff00] rounded-xl w-4/5"></div>
        <p className="pr-2 text-md text-slate-300">
          {formatCurrency(plannedAmount)}
        </p>
      </div>
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

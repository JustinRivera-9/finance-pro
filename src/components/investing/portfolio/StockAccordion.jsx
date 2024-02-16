import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { useState } from "react";

import { formatCurrency } from "../../../utils/helperFunctions";

function StockAccordion({ stock }) {
  const [formOpen, setFormOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { id, investment, logo, name, ticker } = stock;

  // console.log(stock);
  return (
    <li className="flex items-center justify-between text-center bg-[#292929] px-4 py-2 rounded-xl">
      <div className="flex items-center space-x-6">
        <div className="text-2xl">{logo}</div>
        <div className="flex flex-col text-left">
          <p className="text-2xl text-slate-200">
            {name} <span className="text-xl text-slate-400">({ticker})</span>
          </p>
          <p className="text-2xl text-[#FFF500]">
            {formatCurrency(investment.totalPosition, true)}
          </p>
          <p className="text-xl text-slate-200">
            {investment.numShares} | {formatCurrency(investment.costBasis)}
            <span className="text-xl">/share</span>
          </p>
        </div>
      </div>
      <button onClick={() => setIsOpen((show) => !show)}>
        {isOpen ? <RemoveCircleIcon /> : <AddCircleIcon color="secondary" />}
      </button>
    </li>
  );
}

export default StockAccordion;

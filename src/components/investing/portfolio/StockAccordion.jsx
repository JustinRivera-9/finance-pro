import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { useState } from "react";

import { formatCurrency } from "../../../utils/helperFunctions";
import StockCard from "./StockCard";
import StockPerformance from "./StockPerformance";
import { Button } from "@mui/material";

function StockAccordion({ stock }) {
  const [formOpen, setFormOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { id, investment, logo, name, ticker } = stock;

  return (
    <li className="flex flex-col text-center bg-[#292929] px-4 py-2 rounded-xl">
      <div className="flex items-center justify-between">
        <StockCard data={stock} />
        <button onClick={() => setIsOpen((show) => !show)}>
          {isOpen ? (
            <RemoveCircleIcon fontSize="medium" />
          ) : (
            <AddCircleIcon color="secondary" fontSize="medium" />
          )}
        </button>
      </div>
      {isOpen && (
        <>
          <StockPerformance investmentData={investment} />
          <div className="flex justify-between items-center py-2 px-1">
            <div className="flex flex-col text-left">
              <p className="text-2xl">{investment.numShares} shares</p>
              <p className="text-2xl text-slate-200">
                {formatCurrency(investment.costBasis)}
                <span className="text-xl">/share</span>
              </p>
            </div>
            <Button
              size="large"
              color="secondary"
              sx={{
                fontSize: "1.25rem",
                width: "fit-content",
                padding: ".5rem 1.25rem",
                borderRadius: "3rem",
              }}
            >
              Update
            </Button>
          </div>
        </>
      )}
    </li>
  );
}

export default StockAccordion;

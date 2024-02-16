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

  // console.log(stock);
  return (
    <li className="flex flex-col text-center bg-[#292929] px-4 py-2 rounded-xl">
      <div className="flex items-center justify-between">
        <StockCard data={stock} />
        <button onClick={() => setIsOpen((show) => !show)}>
          {isOpen ? (
            <RemoveCircleIcon fontSize="large" />
          ) : (
            <AddCircleIcon color="secondary" fontSize="large" />
          )}
        </button>
      </div>
      {isOpen && (
        <>
          <StockPerformance investmentData={investment} />
          <Button
            size="large"
            color="secondary"
            variant="contained"
            sx={{
              fontSize: "1rem",
              width: "fit-content",
              margin: "0.5rem auto",
              padding: ".5rem 1.25rem",
              borderRadius: "3rem",
            }}
          >
            Update
          </Button>
        </>
      )}
    </li>
  );
}

export default StockAccordion;

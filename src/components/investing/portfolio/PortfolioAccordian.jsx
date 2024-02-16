import { Button } from "@mui/material";
import StockAccordion from "./StockAccordion";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { formatCurrency } from "../../../utils/helperFunctions";

import { useState } from "react";

function PortfolioAccordian({ data }) {
  // Data is a portfolio
  const [formOpen, setFormOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const {
    portfolioName,
    brokerage,
    value,
    valueChange: { dollarChange, percentChange },
  } = data;

  return (
    <li className="flex flex-col space-y-2 py-4 items-center bg-[#404040] rounded-xl md:w-2/5 md:h-fit">
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-around items-baseline space-x-4 space-y-2 w-full pr-8">
          <div className="flex space-x-4 items-baseline">
            <p className="text-3xl capitalize md:text-3xl text-slate-200">
              {portfolioName}
            </p>
            <p className="text-xl capitalize md:text-3xl text-slate-400">
              {brokerage}
            </p>
          </div>
          <div className="flex justify-between w-full">
            <p
              className={`text-[${
                Number(dollarChange) > 0 ? "#48ff00c2" : "#ff5656c2"
              }] text-2xl md:text-2xl`}
            >
              {`${Number(dollarChange) > 0 ? "+" : ""}${formatCurrency(
                value,
                true
              )}`}
            </p>
            <div className="flex space-x-2 items-baseline">
              <p
                className={`text-[${
                  Number(dollarChange) > 0 ? "#48ff00c2" : "#ff5656c2"
                }] text-2xl md:text-2xl`}
              >
                {formatCurrency(dollarChange)}
              </p>
              <p
                className={`text-[${
                  Number(dollarChange) > 0 ? "#48ff00c2" : "#ff5656c2"
                }] text-xl md:text-2xl`}
              >
                {`(${Number(dollarChange) > 0 ? "+" : ""}${percentChange}%)`}
              </p>
            </div>
          </div>
        </div>
        <button onClick={() => setIsOpen((show) => !show)} className="pr-4">
          {isOpen ? (
            <RemoveCircleIcon color="secondary" />
          ) : (
            <AddCircleIcon color="primary" />
          )}
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col space-y-2 w-full px-4">
          {data.stocks.map((el) => (
            <StockAccordion key={el.id} expense={el} />
          ))}
        </ul>
      )}
      {formOpen && <h1>Form Open</h1>}
    </li>
  );
}

export default PortfolioAccordian;

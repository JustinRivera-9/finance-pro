import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { formatCurrency } from "../../../utils/helperFunctions";

function PortfolioCard({ data, isOpen, setIsOpen }) {
  const {
    portfolioName,
    brokerage,
    value,
    valueChange: { dollarChange, percentChange },
  } = data;

  return (
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
          <RemoveCircleIcon fontSize="large" />
        ) : (
          <AddCircleIcon fontSize="large" color="secondary" />
        )}
      </button>
    </div>
  );
}

export default PortfolioCard;

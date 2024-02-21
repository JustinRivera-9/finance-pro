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

  const isPositive = Number(dollarChange) > 0;
  const textColor = isPositive ? "[#48ff00c2]" : "red-400";
  console.log(isPositive, textColor);

  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col justify-around items-baseline space-x-4 space-y-2 w-full pr-8">
        <div className="flex space-x-4 items-baseline">
          <p className="text-2xl capitalize md:text-3xl text-slate-200">
            {portfolioName}
          </p>
          <p className="text-lg capitalize md:text-3xl text-slate-400">
            {brokerage}
          </p>
        </div>
        <div
          className={`flex justify-between items-baseline w-full text-${textColor}`}
        >
          <p className="text-[#eaeaea] text-xl">
            {formatCurrency(value, true)}
          </p>
          <div className="flex space-x-1 items-baseline">
            <p className="text-lg">
              {`${isPositive ? "+" : ""}${formatCurrency(dollarChange, true)}`}
            </p>
            <p className="text-base">{`(${percentChange}%)`}</p>
          </div>
        </div>
      </div>
      <button onClick={() => setIsOpen((show) => !show)} className="pr-2">
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

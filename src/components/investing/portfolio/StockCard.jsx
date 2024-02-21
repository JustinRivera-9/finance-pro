import { formatCurrency } from "../../../utils/helperFunctions";

function StockCard({ data }) {
  const { id, investment, logo, name, ticker } = data;
  const positiveDay = investment.dayChange.dollarChange > 0;
  const textColor = positiveDay ? "[#48ff00c2]" : "red-400";

  // Calculations
  const totalPosition = investment.numShares * investment.sharePrice;

  return (
    <div className="flex items-center space-x-6">
      <div className="text-lg">{logo}</div>
      <div className="flex flex-col text-left">
        <p className="text-xl text-slate-200">
          {name} <span className="text-lg text-slate-300">({ticker})</span>
        </p>
        <div className="flex space-x-2 items-baseline">
          <p className="text-lg text-slate-200">
            {formatCurrency(totalPosition, true)}
          </p>
          <p className={`text-${textColor} text-base`}>
            {`${positiveDay ? "+" : ""}${formatCurrency(
              investment.dayChange.dollarChange
            )}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StockCard;

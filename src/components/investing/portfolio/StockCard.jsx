import { formatCurrency } from "../../../utils/helperFunctions";

function StockCard({ data }) {
  const { id, investment, logo, name, ticker } = data;
  const positiveDay = investment.dayChange.dollarChange > 0;

  return (
    <div className="flex items-center space-x-6">
      <div className="text-2xl">{logo}</div>
      <div className="flex flex-col text-left">
        <p className="text-2xl text-slate-200">
          {name} <span className="text-xl text-slate-300">({ticker})</span>
        </p>
        <div className="flex space-x-2 items-baseline">
          <p className="text-2xl text-[#FFF500]">
            {formatCurrency(investment.totalPosition, true)}
          </p>
          <p
            className={`text-[${
              positiveDay ? "#48ff00c2" : "#ff5656c2"
            }] text-xl`}
          >
            {`${positiveDay ? "+" : ""}${formatCurrency(
              investment.dayChange.dollarChange,
              true
            )}`}
          </p>
          {/* <p
              className={`text-[${
                positiveDay ? "#48ff00c2" : "#ff5656c2"
              }] text-sm`}
            >
              {`(${positiveDay ? "+" : ""}${
                investment.dayChange.percentChange
              }%)`}
            </p> */}
        </div>
      </div>
    </div>
  );
}

export default StockCard;

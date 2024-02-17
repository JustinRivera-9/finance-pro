import { formatCurrency } from "../../../utils/helperFunctions";

function StockPerformance({ investmentData }) {
  const { stockChange, dayChange, totalChange } = investmentData;

  return (
    <div className="flex justify-around text-center py-2 space-x-2">
      <div className="bg-[#404040] rounded-xl p-2">
        <p className="text-xl">Stock</p>
        <p
          className={`text-[${
            Number(stockChange.dollarChange) > 0 ? "#48ff00c2" : "#ff5656c2"
          }] text-xl`}
        >
          {`${Number(stockChange.dollarChange) > 0 ? "+" : ""}${formatCurrency(
            stockChange.dollarChange
          )}`}
        </p>
        <p
          className={`text-[${
            Number(stockChange.percentChange) > 0 ? "#48ff00c2" : "#ff5656c2"
          }] text-xl`}
        >
          (
          {`${Number(stockChange.dollarChange) > 0 ? "+" : ""}${
            stockChange.percentChange
          }%`}
          )
        </p>
      </div>
      <div className="bg-[#404040] rounded-xl p-2">
        <p className="text-xl">Day</p>
        <p
          className={`text-[${
            Number(dayChange.dollarChange) > 0 ? "#48ff00c2" : "#ff5656c2"
          }] text-xl`}
        >
          {`${Number(dayChange.dollarChange) > 0 ? "+" : ""}${formatCurrency(
            dayChange.dollarChange
          )}`}
        </p>
        <p
          className={`text-[${
            Number(dayChange.percentChange) > 0 ? "#48ff00c2" : "#ff5656c2"
          }] text-xl`}
        >
          (
          {`${Number(dayChange.dollarChange) > 0 ? "+" : ""}${
            dayChange.percentChange
          }%`}
          )
        </p>
      </div>
      <div className="bg-[#404040] rounded-xl p-2">
        <p className="text-xl">Total</p>
        <p
          className={`text-[${
            Number(totalChange.dollarChange) > 0 ? "#48ff00c2" : "#ff5656c2"
          }] text-xl`}
        >
          {`${Number(totalChange.dollarChange) > 0 ? "+" : ""}${formatCurrency(
            totalChange.dollarChange,
            true
          )}`}
        </p>
        <p
          className={`text-[${
            Number(totalChange.percentChange) > 0 ? "#48ff00c2" : "#ff5656c2"
          }] text-xl`}
        >
          (
          {`${Number(totalChange.dollarChange) > 0 ? "+" : ""}${
            totalChange.percentChange
          }%`}
          )
        </p>
      </div>
    </div>
  );
}

export default StockPerformance;

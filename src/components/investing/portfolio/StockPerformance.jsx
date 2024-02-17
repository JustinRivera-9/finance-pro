import { formatCurrency } from "../../../utils/helperFunctions";

function StockPerformance({ investmentData }) {
  const { stockChange, dayChange, totalChange, sharePrice } = investmentData;
  const positiveDay = stockChange.dollarChange > 0;
  const positiveTotal = totalChange.dollarChange > 0;

  return (
    <div className="flex justify-around text-center py-2 space-x-2">
      <div className="p-2">
        <p className="text-xl">{formatCurrency(sharePrice)}</p>
        <p
          className={`text-[${
            positiveDay ? "#48ff00c2" : "#ff5656c2"
          }] text-xl`}
        >
          {`${positiveDay ? "+" : ""}${formatCurrency(
            stockChange.dollarChange
          )}`}
        </p>
        <p
          className={`text-[${
            positiveDay ? "#48ff00c2" : "#ff5656c2"
          }] text-xl`}
        >
          ({`${positiveDay ? "+" : ""}${stockChange.percentChange}%`})
        </p>
      </div>
      <div className="bg-[#404040] rounded-xl p-2 w-2/5">
        <p className="text-xl">Day</p>
        <p
          className={`text-[${
            positiveDay ? "#48ff00c2" : "#ff5656c2"
          }] text-xl`}
        >
          {`${positiveDay ? "+" : ""}${formatCurrency(dayChange.dollarChange)}`}
        </p>
        <p
          className={`text-[${
            positiveDay ? "#48ff00c2" : "#ff5656c2"
          }] text-xl`}
        >
          ({`${positiveDay ? "+" : ""}${dayChange.percentChange}%`})
        </p>
      </div>
      <div className="bg-[#404040] rounded-xl p-2 w-2/5">
        <p className="text-xl">Total</p>
        <p
          className={`text-[${
            positiveTotal ? "#48ff00c2" : "#ff5656c2"
          }] text-xl`}
        >
          {`${positiveDay ? "+" : ""}${formatCurrency(
            totalChange.dollarChange,
            true
          )}`}
        </p>
        <p
          className={`text-[${
            positiveTotal ? "#48ff00c2" : "#ff5656c2"
          }] text-xl`}
        >
          ({`${positiveDay ? "+" : ""}${totalChange.percentChange}%`})
        </p>
      </div>
    </div>
  );
}

export default StockPerformance;

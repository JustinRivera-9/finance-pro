import { formatCurrency } from "../../../utils/helperFunctions";

function StockPerformance({ investmentData }) {
  const { stockPriceChange, dayChange, totalChange, sharePrice } =
    investmentData;

  // Used for text colors
  const positiveDay = stockPriceChange.dollarChange > 0;
  const positiveTotal = totalChange.dollarChange > 0;
  const textColorDay = positiveDay ? "[#48ff00c2]" : "red-400";
  const textColorTotal = positiveTotal ? "[#48ff00c2]" : "red-400";

  console.log(positiveTotal);

  return (
    <div className="flex justify-around text-center py-2 space-x-2">
      <div className="p-2 bg-[#404040] rounded-xl">
        <p className="text-xl">{formatCurrency(sharePrice)}</p>
        <p className={`text-${textColorDay} text-xl`}>
          {`${positiveDay ? "+" : ""}${formatCurrency(
            stockPriceChange.dollarChange
          )}`}
        </p>
        <p className={`text-${textColorDay} text-xl`}>
          ({`${stockPriceChange.percentChange}%`})
        </p>
      </div>
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex items-baseline justify-center bg-[#404040] rounded-xl py-2 w-full space-x-2">
          <p className="text-xl">Day</p>
          <p className={`text-${textColorDay} text-xl`}>
            {`${positiveDay ? "+" : ""}${formatCurrency(
              dayChange.dollarChange
            )}`}
          </p>
          <p className={`text-${textColorDay} text-lg`}>
            ({`${dayChange.percentChange}%`})
          </p>
        </div>
        <div className="flex items-baseline justify-center bg-[#404040] rounded-xl py-2 w-full space-x-2">
          <p className="text-xl">Total</p>
          <p className={`text-${textColorTotal} text-xl`}>
            {`${positiveTotal ? "+" : ""}${formatCurrency(
              totalChange.dollarChange,
              true
            )}`}
          </p>
          <p className={`text-${textColorTotal} text-lg`}>
            ({`${totalChange.percentChange}%`})
          </p>
        </div>
      </div>
    </div>
  );
}

export default StockPerformance;

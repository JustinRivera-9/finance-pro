import { formatCurrency } from "../../../utils/helperFunctions";

// sharePrice: 199.95,
// totalPosition: 12825,
// numShares: 52,
// costBasis: 158.67,
// stockPriceChange: { dollarChange: -0.5, percentChange: -0.25 },
// dayChange: { dollarChange: -250.67, percentChange: -0.25 },
// totalChange: { dollarChange: 4569, percentChange: 152 },

function StockPerformance({ investmentData }) {
  const {
    stockPriceChange,
    dayChange,
    totalChange,
    sharePrice,
    numShares,
    costBasis,
  } = investmentData;

  // Calculations
  const dayChangeDollars = numShares * stockPriceChange.dollarChange;
  const totalChangeDollars = (sharePrice - costBasis) * numShares;
  const totalChangePercent = (
    ((sharePrice * numShares) / (costBasis * numShares) - 1) *
    100
  ).toFixed(2);

  // Used for text colors
  const positiveDay = stockPriceChange.dollarChange > 0;
  const positiveTotal = totalChange.dollarChange > 0;
  const textColorDay = positiveDay ? "[#48ff00c2]" : "red-400";
  const textColorTotal = totalChangeDollars > 0 ? "[#48ff00c2]" : "red-400";

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
            {`${positiveDay ? "+" : ""}${formatCurrency(dayChangeDollars)}`}
          </p>
          <p className={`text-${textColorDay} text-lg`}>
            ({`${dayChange.percentChange}%`})
          </p>
        </div>
        <div className="flex items-baseline justify-center bg-[#404040] rounded-xl py-2 w-full space-x-2">
          <p className="text-xl">Total</p>
          <p className={`text-${textColorTotal} text-xl`}>
            {`${totalChangeDollars > 0 ? "+" : ""}${formatCurrency(
              totalChangeDollars,
              true
            )}`}
          </p>
          <p className={`text-${textColorTotal} text-lg`}>
            ({`${totalChangePercent}%`})
          </p>
        </div>
      </div>
    </div>
  );
}

export default StockPerformance;

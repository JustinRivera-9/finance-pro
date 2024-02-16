import { formatCurrency } from "../../../utils/helperFunctions";

function StockCard({ data }) {
  const { id, investment, logo, name, ticker } = data;

  return (
    <div className="flex items-center space-x-6">
      <div className="text-2xl">{logo}</div>
      <div className="flex flex-col text-left">
        <p className="text-2xl text-slate-200">
          {name} <span className="text-xl text-slate-400">({ticker})</span>
        </p>
        <p className="text-2xl text-[#FFF500]">
          {formatCurrency(investment.totalPosition, true)}
        </p>
        <p className="text-xl text-slate-200">
          {investment.numShares} Shares | {formatCurrency(investment.costBasis)}
          {/* <span className="text-xl">/share</span> */}
        </p>
      </div>
    </div>
  );
}

export default StockCard;

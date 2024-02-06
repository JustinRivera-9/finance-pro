import { formatCurrency } from "../utils/helperFunctions";

function CategoryProgressBar({ spent, planned }) {
  const percentSpent = (spent / planned) * 100;

  return (
    <div className="flex justify-around items-center w-full">
      <div className="h-5 box-content border-[#292929] border-2 rounded-xl w-4/5">
        <div
          style={{
            width: percentSpent > 100 ? "100%" : `${percentSpent}%`,
            backgroundColor: percentSpent > 100 ? "#D22B2B" : `#48ff00`,
          }}
          className={`h-5 rounded-xl w-[${percentSpent}%]`}
        ></div>
      </div>
      <p className="pr-2 text-md text-slate-300">{formatCurrency(planned)}</p>
    </div>
  );
}

export default CategoryProgressBar;

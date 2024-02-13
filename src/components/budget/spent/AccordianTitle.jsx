import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { formatCurrency } from "../../../utils/helperFunctions";

function CategoryTitle({ info, isOpen, setIsOpen }) {
  const { plannedAmount, spentAmount, categoryName } = info;
  const percentSpent = (spentAmount / plannedAmount) * 100;

  return (
    <div className="flex justify-between w-full">
      <div className="flex justify-around items-baseline space-x-4">
        <p className="text-2xl pl-4 capitalize md:text-3xl">{categoryName}</p>
        <p
          style={{
            color: percentSpent > 100 ? "#D22B2B" : `#48ff00`,
          }}
          className="text-[#48ff00c2] text-xl md:text-2xl"
        >
          Spent: {formatCurrency(spentAmount)}
        </p>
      </div>
      <button onClick={() => setIsOpen((show) => !show)} className="pr-4">
        {isOpen ? (
          <RemoveCircleIcon color="primary" />
        ) : (
          <AddCircleIcon color="primary" />
        )}
      </button>
    </div>
  );
}

export default CategoryTitle;

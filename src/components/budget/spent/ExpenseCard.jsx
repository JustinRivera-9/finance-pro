import MoreVertIcon from "@mui/icons-material/MoreVert";

import { formatCurrency } from "../../../utils/helperFunctions";
import MenuIcon from "../../../ui/MenuIcon";

function ExpenseCard({ expense }) {
  const { id, amount, date, description } = expense;
  const [month, day] = date.split(" ");

  return (
    <li className="flex mt-2 px-3 py-1 justify-between bg-[#292929] items-center w-full rounded-2xl">
      <div className="flex space-x-4 items-center">
        <div className="flex flex-col text-slate-300">
          <p className="text-2xl">{day}</p>
          <p>{month}</p>
        </div>
        <p className="text-xl">{description}</p>
      </div>
      <div className="flex items-center space-x-4">
        <p className="text-[#48ff00bd] text-xl">{formatCurrency(amount)}</p>
        <MenuIcon />
        {/* <MoreVertIcon /> */}
      </div>
    </li>
  );
}

export default ExpenseCard;

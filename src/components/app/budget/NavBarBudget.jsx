import { NavLink } from "react-router-dom";

function NavBarBudget() {
  return (
    <div className="flex justify-around mx-2 text-lg border-b pb-2 border-slate-200 text-slate-200">
      <NavLink to="/app/budget-tracking/">Overview</NavLink>
      <NavLink to="/app/budget-tracking/budget">Budget</NavLink>
      <NavLink to="/app/budget-tracking/update">Update</NavLink>
      <NavLink to="/app/budget-tracking/insights">Insights</NavLink>
    </div>
  );
}

export default NavBarBudget;

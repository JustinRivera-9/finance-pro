import { NavLink } from "react-router-dom";

function NavBarBudget() {
  return (
    <div className="flex justify-center space-x-8 text-lg text-slate-200">
      <NavLink to="/app/budget-tracking/">Overview</NavLink>
      <NavLink to="/app/budget-tracking/budget">Budget</NavLink>
      <NavLink to="/app/budget-tracking/update">Update</NavLink>
      <NavLink to="/app/budget-tracking/insights">Insights</NavLink>
    </div>
  );
}

export default NavBarBudget;

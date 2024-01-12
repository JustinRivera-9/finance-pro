import { NavLink } from "react-router-dom";

function NavBarBudget() {
  return (
    <div className="md:flex md:justify-center md:border-none md:space-x-8 flex justify-around mx-4 text-xl md:2xl border-b pb-2 border-slate-200 text-slate-200">
      <NavLink to="/app/budget-tracking/">Overview</NavLink>
      <NavLink to="/app/budget-tracking/budget">Budget</NavLink>
      <NavLink to="/app/budget-tracking/update">Update</NavLink>
      <NavLink to="/app/budget-tracking/insights">Insights</NavLink>
    </div>
  );
}

export default NavBarBudget;

import { NavLink } from "react-router-dom";

function NavBarBudget() {
  return (
    <div className="flex justify-center space-x-8">
      <NavLink to="/app/budget-tracking/" className="text-lg text-slate-500">
        Overview
      </NavLink>
      <NavLink
        to="/app/budget-tracking/budget"
        className="text-lg text-slate-500"
      >
        Budget
      </NavLink>
      <NavLink
        to="/app/budget-tracking/update"
        className="text-lg text-slate-500"
      >
        Update
      </NavLink>
      <NavLink
        to="/app/budget-tracking/insights"
        className="text-lg text-slate-500"
      >
        Insights
      </NavLink>
    </div>
  );
}

export default NavBarBudget;

import { NavLink } from "react-router-dom";

function NavBarBudget() {
  return (
    <nav className="md:flex md:justify-center md:border-none md:space-x-8 flex justify-around mx-4 text-xl md:2xl border-b pb-2 border-slate-200 text-slate-200">
      <NavLink to="/app/budget-tracking" end>
        Overview
      </NavLink>
      <NavLink to="/app/budget-tracking/planned">Planned</NavLink>
      <NavLink to="/app/budget-tracking/spent">Spent</NavLink>
      <NavLink to="/app/budget-tracking/calendar">Calendar</NavLink>
    </nav>
  );
}

export default NavBarBudget;

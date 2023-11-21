import { NavLink } from "react-router-dom";

function NavBarResources() {
  return (
    <div className="flex justify-center space-x-8">
      <NavLink to="/app/resources/news" className="text-lg text-slate-500">
        Financial News
      </NavLink>
      <NavLink
        to="/app/resources/cost-basis-calculator"
        className="text-lg text-slate-500"
      >
        Cost Basis Calculator
      </NavLink>
    </div>
  );
}

export default NavBarResources;

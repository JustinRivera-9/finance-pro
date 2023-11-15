import { NavLink } from "react-router-dom";

function NavBarInvesting() {
  return (
    <div className="flex justify-center space-x-8">
      <NavLink
        to="/app/investments/portfolio"
        className="text-lg text-slate-500"
      >
        Portfolio
      </NavLink>
      <NavLink to="/app/investments/news" className="text-lg text-slate-500">
        News
      </NavLink>
    </div>
  );
}

export default NavBarInvesting;

import { NavLink } from "react-router-dom";

function NavBarInvesting() {
  return (
    <nav className="md:flex md:justify-center md:border-none md:space-x-8 flex justify-around mx-4 text-xl md:2xl border-b pb-2 border-slate-200 text-slate-200">
      <NavLink to="/app/investments" end>
        Overview
      </NavLink>
      <NavLink to="/app/investments/portfolio">Portfolio</NavLink>
      <NavLink to="/app/investments/news">News</NavLink>
    </nav>
  );
}

export default NavBarInvesting;

import { Link, NavLink } from "react-router-dom";

function NavBarDesktop() {
  return (
    <nav className="flex justify-between">
      <Link to="/app" className="text-2xl tracking-widest">
        FINANCE PRO
      </Link>
      <div className="flex space-x-14">
        <NavLink to="/app/budget-tracking" className="text-xl">
          BUDGET
        </NavLink>
        <NavLink to="/app/investments" className="text-xl">
          INVESTMENTS
        </NavLink>
        <NavLink to="/app/resources" className="text-xl">
          RESOURCES
        </NavLink>
        <NavLink to="/app/account" className="text-xl">
          ACCOUNT
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBarDesktop;

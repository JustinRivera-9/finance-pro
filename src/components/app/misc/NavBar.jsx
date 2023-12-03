import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import AccountMenu from "./AccountMenu";

function NavBar() {
  return (
    <div className="flex justify-between">
      <Link to="/app" className="text-2xl">
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
        <AccountMenu />
      </div>
    </div>
  );
}

export default NavBar;

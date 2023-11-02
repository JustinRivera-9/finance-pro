import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-between">
      <Link to="/" className="text-2xl">
        FINANCE PRO
      </Link>
      <div className="flex space-x-14">
        <NavLink to="/budgets" className="text-xl">
          BUDGETS
        </NavLink>
        <NavLink to="/investing" className="text-xl">
          INVESTING
        </NavLink>
        <NavLink to="/pricing" className="text-xl">
          PRICING
        </NavLink>
      </div>
      <div className="flex">
        <Link to="/sign-up">
          <Button
            sx={{ fontSize: ".75rem", borderRadius: "8px" }}
            variant="outlined"
            size="large"
          >
            Sign Up
          </Button>
          <Link to="/login" className="ml-8">
            <Button
              sx={{ fontSize: ".75rem", borderRadius: "8px" }}
              variant="contained"
              size="large"
            >
              LOGIN
            </Button>
          </Link>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;

import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex">
      <NavLink to="/" className="text-3xl mr-96">
        FINANCE PRO
      </NavLink>
      <div className="flex">
        <NavLink to="/budgets" className="text-3xl">
          Budgets
        </NavLink>
        <NavLink to="/investing" className="text-3xl">
          Investing
        </NavLink>
        <NavLink to="/pricing" className="text-3xl">
          Pricing
        </NavLink>
      </div>
      <div className="flex">
        <Link to="/sign-up">
          <Button
            sx={{ fontSize: "1.15rem", borderRadius: "8px" }}
            variant="outlined"
            size="large"
          >
            Sign Up
          </Button>
          <Link to="/login">
            <Button
              sx={{ fontSize: "1.15rem", borderRadius: "8px" }}
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

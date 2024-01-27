import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBarInvesting() {
  const [alignment, setAlignment] = useState("overview");

  return (
    <nav className="md:flex md:justify-center md:space-x-8 flex justify-around mx-4 text-xl md:2xl pb-2">
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={(event, value) => setAlignment(value)}
        aria-label="Platform"
        sx={{ borderRadius: "50px" }}
      >
        <ToggleButton value="overview">
          <NavLink to="/app/investments" end>
            Overview
          </NavLink>
        </ToggleButton>
        <ToggleButton value="planned">
          <NavLink to="/app/investments/portfolio">Portfolio</NavLink>
        </ToggleButton>
        <ToggleButton value="spent">
          <NavLink to="/app/investments/news">News</NavLink>
        </ToggleButton>
      </ToggleButtonGroup>
    </nav>
  );
}

export default NavBarInvesting;

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBarBudget() {
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
          <NavLink to="/app/budget-tracking" end>
            Overview
          </NavLink>
        </ToggleButton>
        <ToggleButton value="planned">
          <NavLink to="/app/budget-tracking/planned">Planned</NavLink>
        </ToggleButton>
        <ToggleButton value="spent">
          <NavLink to="/app/budget-tracking/spent">Spent</NavLink>
        </ToggleButton>
        <ToggleButton value="calendar">
          <NavLink to="/app/budget-tracking/calendar">Calendar</NavLink>
        </ToggleButton>
      </ToggleButtonGroup>
    </nav>
  );
}

export default NavBarBudget;

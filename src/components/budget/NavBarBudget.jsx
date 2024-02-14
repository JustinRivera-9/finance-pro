import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBarBudget() {
  const [page, setPage] = useState();

  const handleChange = (event, page) => {
    setPage(page);
  };

  return (
    <nav className="md:flex md:justify-center md:space-x-8 flex justify-around w-fit mx-auto">
      <Tabs
        value={page}
        onChange={(e) => handleChange(e.target.value)}
        aria-label="budget navigation"
      >
        <NavLink to="/app/budget-tracking" end>
          <Tab
            label="Dashboard"
            value={0}
            sx={{ fontSize: "1rem", opacity: "1", borderRadius: "1.5rem" }}
          />
        </NavLink>
        <NavLink to="/app/budget-tracking/planned">
          <Tab
            label="Planned"
            value={1}
            sx={{ fontSize: "1rem", opacity: "1", borderRadius: "1.5rem" }}
          />
        </NavLink>
        <NavLink to="/app/budget-tracking/spent">
          <Tab
            label="Spent"
            value={2}
            sx={{ fontSize: "1rem", opacity: "1", borderRadius: "1.5rem" }}
          />
        </NavLink>
      </Tabs>
    </nav>
  );
}

export default NavBarBudget;

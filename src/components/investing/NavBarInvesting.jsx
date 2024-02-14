import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBarInvesting() {
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
        <NavLink to="/app/investments" end>
          <Tab
            label="Dashboard"
            value={0}
            sx={{ fontSize: "1rem", opacity: "1", borderRadius: "1.5rem" }}
          />
        </NavLink>
        <NavLink to="/app/investments/portfolio">
          <Tab
            label="Portfolio"
            value={1}
            sx={{ fontSize: "1rem", opacity: "1", borderRadius: "1.5rem" }}
          />
        </NavLink>
        <NavLink to="/app/investments/news">
          <Tab
            label="News"
            value={2}
            sx={{ fontSize: "1rem", opacity: "1", borderRadius: "1.5rem" }}
          />
        </NavLink>
      </Tabs>
    </nav>
  );
}

export default NavBarInvesting;

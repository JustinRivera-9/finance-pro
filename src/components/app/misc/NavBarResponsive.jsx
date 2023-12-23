import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArchiveIcon from "@mui/icons-material/Archive";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBarResponsive() {
  const [page, setPage] = useState();
  const navigate = useNavigate();
  console.log(page);

  return (
    <BottomNavigation
      sx={{ display: "flex", justifyContent: "space-between" }}
      value={page}
      onChange={(event, newValue) => {
        setPage(newValue);
        if (newValue === 0) navigate("/app");
        if (newValue === 1) navigate("/app/budget-tracking");
        if (newValue === 2) navigate("/app/investments");
        if (newValue === 3) navigate("/app/account");
      }}
    >
      <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />} />
      <BottomNavigationAction label="Budget" icon={<MonetizationOnIcon />} />
      <BottomNavigationAction
        label="Portfolio"
        icon={<AccountBalanceOutlinedIcon />}
      />
      <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}
export default NavBarResponsive;

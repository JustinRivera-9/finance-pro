import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBarResponsive() {
  const [page, setPage] = useState();
  const navigate = useNavigate();
  console.log(page);

  return (
    <BottomNavigation
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#e7e5e4",
      }}
      value={page}
      onChange={(event, newValue) => {
        setPage(newValue);
        if (newValue === 0) navigate("/app");
        if (newValue === 1) navigate("/app/budget-tracking");
        if (newValue === 2) navigate("/app/investments");
        if (newValue === 3) navigate("/app/account");
      }}
    >
      <BottomNavigationAction label="Dashboard" icon={<HomeRoundedIcon />} />
      <BottomNavigationAction label="Budget" icon={<MonetizationOnIcon />} />
      <BottomNavigationAction
        label="Portfolio"
        icon={<LeaderboardRoundedIcon />}
      />
      <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}
export default NavBarResponsive;

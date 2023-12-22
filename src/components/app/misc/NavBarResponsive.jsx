import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";

function NavBarResponsive() {
  const [page, setPage] = useState("dashboard");
  return (
    <nav className="fixed bottom-0 left-0 w-screen">
      <BottomNavigation
        sx={{ display: "flex", justifyContent: "space-between" }}
        value={page}
        onChange={(event, newValue) => {
          setPage(newValue);
        }}
      >
        {/* <div> */}
        <BottomNavigationAction label="Dashboard" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Budget" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Portfolio" icon={<ArchiveIcon />} />
        <BottomNavigationAction label="Account" icon={<ArchiveIcon />} />
        {/* </div> */}
      </BottomNavigation>
    </nav>
  );
}
export default NavBarResponsive;

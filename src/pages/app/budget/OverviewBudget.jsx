import { Outlet } from "react-router";
import NavBar from "../../../components/app/NavBar";
import NavBarBudget from "../../../components/app/NavBarBudget";

function OverviewBudget() {
  return (
    <div>
      <NavBar />
      <NavBarBudget />
      <Outlet />
    </div>
  );
}

export default OverviewBudget;

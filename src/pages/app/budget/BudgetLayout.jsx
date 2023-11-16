import { Outlet } from "react-router";
import NavBarBudget from "../../../components/app/NavBarBudget";

function BudgetLayout() {
  return (
    <div>
      <NavBarBudget />
      <Outlet />
    </div>
  );
}

export default BudgetLayout;

import { Outlet } from "react-router";
import NavBarBudget from "../../components/budget/NavBarBudget";

function BudgetLayout() {
  return (
    <div>
      <NavBarBudget />
      <Outlet />
    </div>
  );
}

export default BudgetLayout;

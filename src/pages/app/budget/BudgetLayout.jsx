import { Outlet, useNavigate } from "react-router";
import { createContext } from "react";
import NavBarBudget from "../../../components/app/budget/NavBarBudget";

// const BudgetContext = createContext(null);

function BudgetLayout({ userData }) {
  return (
    <div>
      {/* <BudgetContext.Provider value={userData.budget}> */}
      <NavBarBudget />
      {/* if budget not set up --> route to update page */}
      <Outlet />
      {/* </BudgetContext.Provider> */}
    </div>
  );
}

export default BudgetLayout;

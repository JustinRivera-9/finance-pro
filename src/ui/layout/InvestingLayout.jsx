import { Outlet } from "react-router";
import NavBarInvesting from "../../components/investing/NavBarInvesting";

function InvestingLayout() {
  return (
    <div>
      <NavBarInvesting />
      <Outlet />
    </div>
  );
}

export default InvestingLayout;

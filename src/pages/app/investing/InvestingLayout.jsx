import { Outlet } from "react-router";
import NavBarInvesting from "../../../components/app/investing/NavBarInvesting";

function InvestingLayout() {
  return (
    <div>
      <NavBarInvesting />
      <Outlet />
    </div>
  );
}

export default InvestingLayout;

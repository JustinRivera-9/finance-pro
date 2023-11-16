import { Outlet } from "react-router";
import NavBarInvesting from "../../../components/app/NavBarInvesting";

function InvestingLayout() {
  return (
    <div>
      <NavBarInvesting />
      <Outlet />
    </div>
  );
}

export default InvestingLayout;

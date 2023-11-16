import { Outlet } from "react-router";
import NavBar from "../../../components/app/NavBar";
import NavBarInvesting from "../../../components/app/NavBarInvesting";

function InvestingLayout() {
  return (
    <div>
      <NavBar />
      <NavBarInvesting />
      <Outlet />
    </div>
  );
}

export default InvestingLayout;

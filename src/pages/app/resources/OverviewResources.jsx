import { Outlet } from "react-router";
import NavBarResources from "../../../components/app/NavBarResources";

function OverviewResources() {
  return (
    <div>
      <NavBarResources />
      <Outlet />
    </div>
  );
}

export default OverviewResources;

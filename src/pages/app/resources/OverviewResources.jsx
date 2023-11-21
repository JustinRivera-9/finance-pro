import { Outlet } from "react-router";
import NavBarResources from "../../../components/app/resources/NavBarResources";

function OverviewResources() {
  return (
    <div>
      <NavBarResources />
      <Outlet />
    </div>
  );
}

export default OverviewResources;

import { Outlet } from "react-router";
import NavBar from "../../../components/app/NavBar";
import NavBarResources from "../../../components/app/NavBarResources";

function OverviewResources() {
  return (
    <div>
      <NavBar />
      <NavBarResources />
      <Outlet />
    </div>
  );
}

export default OverviewResources;

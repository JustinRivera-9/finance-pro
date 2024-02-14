import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/app/Dashboard.jsx";
import DashboardBudget from "../../pages/app/budget/DashboardBudget.jsx";
import Spent from "../../pages/app/budget/Spent.jsx";
import Planned from "../../pages/app/budget/Planned.jsx";
import CalendarLayout from "../layout/CalendarLayout.jsx";
import OverviewPortfolio from "../../pages/app/investing/OverviewPortfolio.jsx";
import Portfolio from "../../pages/app/investing/Portfolio.jsx";
import NewsPortfolio from "../../pages/app/investing/NewsPortfolio.jsx";
import Account from "../../pages/app/Account.jsx";
import InvestingLayout from "../layout/InvestingLayout.jsx";
import BudgetLayout from "../layout/BudgetLayout";
import NavBarDesktop from "../NavBarDesktop.jsx";
import PageNotFound from "../PageNotFound.jsx";
import useGetUser from "../../services/useGetUser.js";
import LoadingSpinner from "../LoadingSpinner.jsx";
import NavBarMobile from "../NavBarMobile.jsx";
import { useEffect, useState } from "react";
import { AuthContext } from "../../utils/context.js";

function AppLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1000) setIsMobile(true);
    if (window.innerWidth > 1000) setIsMobile(false);
  }, []);

  const { userId, isLoading } = useGetUser();

  ///// Store userID in url to use in dashboard

  ////////// Checks if data is loading
  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  return userId.length ? (
    <AuthContext.Provider value={userId}>
      {!isMobile && <NavBarDesktop />}
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="budget-tracking" element={<BudgetLayout />}>
          <Route index element={<DashboardBudget />} />
          <Route path="planned" element={<Planned />} />
          <Route path="spent" element={<Spent />} />
          <Route path="calendar" element={<CalendarLayout />} />
        </Route>
        <Route path="investments" element={<InvestingLayout />}>
          <Route index element={<OverviewPortfolio />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="news" element={<NewsPortfolio />} />
        </Route>
        <Route path="account" element={<Account />} />
      </Routes>

      {isMobile && (
        <nav className="fixed bottom-0 left-0 w-screen">
          <NavBarMobile />
        </nav>
      )}
    </AuthContext.Provider>
  ) : (
    <PageNotFound
      heading="You shouldn't be here"
      subHeading="Please sign back in"
      message="You either signed out or have been inactive for too long"
    />
  );
}

export default AppLayout;

import { Route, Routes, useParams } from "react-router-dom";
import Dashboard from "../../pages/app/Dashboard.jsx";
import OverviewBudget from "../../pages/app/budget/OverviewBudget.jsx";
import Budget from "../../pages/app/budget/Budget.jsx";
import Update from "../../pages/app/budget/Update.jsx";
import Insights from "../../pages/app/budget/Insights.jsx";
import OverviewPortfolio from "../../pages/app/investing/OverviewPortfolio.jsx";
import Portfolio from "../../pages/app/investing/Portfolio.jsx";
import NewsPortfolio from "../../pages/app/investing/NewsPortfolio.jsx";
import OverviewResources from "../../pages/app/resources/OverviewResources.jsx";
import News from "../../pages/app/resources/News.jsx";
import CostBasisCalculator from "../../pages/app/resources/CostBasisCalculator.jsx";
import Account from "../../pages/app/Account.jsx";
import InvestingLayout from "../layout/InvestingLayout.jsx";
import BudgetLayout from "../layout/BudgetLayout";
import NavBarDesktop from "../NavBarDesktop.jsx";
import PageNotFound from "../PageNotFound.jsx";
import useGetUser from "../../services/useGetUser.js";
import LoadingSpinner from "../LoadingSpinner.jsx";
import NavBarMobile from "../NavBarMobile.jsx";
import { useEffect, useState } from "react";

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
    <>
      {!isMobile && <NavBarDesktop />}
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="budget-tracking" element={<BudgetLayout />}>
          <Route index element={<OverviewBudget />} />
          <Route path="budget" element={<Budget />} />
          <Route path="update" element={<Update userId={userId} />} />
          <Route path="insights" element={<Insights />} />
        </Route>
        <Route path="investments" element={<InvestingLayout />}>
          <Route index element={<OverviewPortfolio />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="news" element={<NewsPortfolio />} />
        </Route>
        <Route path="resources" element={<OverviewResources />}>
          <Route path="news" element={<News />} />
          <Route
            path="cost-basis-calculator"
            element={<CostBasisCalculator />}
          />
        </Route>
        <Route path="account" element={<Account userId={userId} />} />
      </Routes>

      {isMobile && (
        <nav className="fixed bottom-0 left-0 w-screen">
          <NavBarMobile />
        </nav>
      )}
    </>
  ) : (
    <PageNotFound
      heading="You shouldn't be here"
      subHeading="Please sign back in"
      message="You either signed out or have been inactive for too long"
    />
  );
}

export default AppLayout;

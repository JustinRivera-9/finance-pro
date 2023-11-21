import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import OverviewBudget from "../app/budget/OverviewBudget";
import Budget from "../app/budget/Budget";
import Update from "../app/budget/Update";
import Insights from "../app/budget/Insights";
import OverviewPortfolio from "../app/investing/OverviewPortfolio";
import Portfolio from "../app/investing/Portfolio";
import NewsPortfolio from "../app/investing/NewsPortfolio";
import OverviewResources from "../app/resources/OverviewResources";
import News from "../app/resources/News";
import CostBasisCalculator from "../app/resources/CostBasisCalculator";
import Account from "./account/Account";
import InvestingLayout from "./investing/InvestingLayout";
import BudgetLayout from "./budget/BudgetLayout";
import NavBar from "../../components/app/misc/NavBar.jsx";
import useUserData from "../../hooks/useUserData";
import PageNotFound from "../PageNotFound";
import { useState, useEffect } from "react";
import { testData } from "../../../data/testData.js";

function AppLayout() {
  const { profile } = testData;
  const userFilled = profile[0];
  const userEmpty = profile[1];
  // const { user, isLoading } = useUserData();
  // console.log(user);
  // console.log(isLoading);

  // return Object.keys(user).length !== 0 ? (
  //   <>
  //     <NavBar />
  //     <Routes>
  //       <Route index element={<Dashboard />} />
  //       <Route path="budget-tracking" element={<BudgetLayout />}>
  //         <Route index element={<OverviewBudget />} />
  //         <Route path="budget" element={<Budget />} />
  //         <Route path="update" element={<Update />} />
  //         <Route path="insights" element={<Insights />} />
  //       </Route>
  //       <Route path="investments" element={<InvestingLayout />}>
  //         <Route index element={<OverviewPortfolio />} />
  //         <Route path="portfolio" element={<Portfolio />} />
  //         <Route path="news" element={<NewsPortfolio />} />
  //       </Route>
  //       <Route path="resources" element={<OverviewResources />}>
  //         <Route path="news" element={<News />} />
  //         <Route
  //           path="cost-basis-calculator"
  //           element={<CostBasisCalculator />}
  //         />
  //       </Route>
  //       <Route path="account" element={<Account />} />
  //     </Routes>
  //   </>
  // ) : (
  //   <PageNotFound
  //     title="Uh-Oh You should not be here"
  //     subHeading="Please sign back in"
  //     message="You either signed out or have been inactive for too long"
  //   />
  // );

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="budget-tracking" element={<BudgetLayout />}>
          <Route index element={<OverviewBudget />} />
          <Route path="budget" element={<Budget />} />
          <Route
            path="update"
            element={<Update userData={userEmpty.budget} />}
          />
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
        <Route path="account" element={<Account />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AppLayout;

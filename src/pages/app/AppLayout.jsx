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
import NavBar from "../../components/app/NavBar";

function AppLayout() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="budget-tracking" element={<BudgetLayout />}>
          <Route index element={<OverviewBudget />} />
          <Route path="budget" element={<Budget />} />
          <Route path="update" element={<Update />} />
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
      </Routes>
    </>
  );
}

export default AppLayout;

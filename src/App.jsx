import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landingPage/Landing";
import LearnMore from "./pages/landingPage/LearnMore";
import Budgets from "./pages/landingPage/Budgets";
import Investing from "./pages/landingPage/Investing";
import Pricing from "./pages/landingPage/pricing";
import Login from "./pages/landingPage/login";
import SignUp from "./pages/landingPage/SignUp";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/app/AppLayout";
import { userObj } from "../data/testData.js";

function App() {
  return (
    <>
      <div className="bg-zinc-100 h-screen py-4 px-10">
        <BrowserRouter>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="learn-more" element={<LearnMore />} />
            <Route path="budgets" element={<Budgets />} />
            <Route path="investing" element={<Investing />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route
              path="app/*"
              element={<AppLayout user={userObj.profile[0]} />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

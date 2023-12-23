import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landingPage/Landing";
import LearnMore from "./pages/landingPage/LearnMore";
import Budgets from "./pages/landingPage/Budgets";
import Investing from "./pages/landingPage/Investing";
import Pricing from "./pages/landingPage/pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/app/AppLayout";
import useGetUser from "./hooks/supabase/useGetUser.js";
import AuthForm from "./components/landingPage/AuthForm.jsx";

function App() {
  const { userId, isLoading } = useGetUser();
  // Add isLoading STATE

  return (
    <>
      <div className="pt-6 px-4">
        <BrowserRouter>
          <Routes>
            <Route index element={<Landing userId={userId} />} />
            <Route path="learn-more" element={<LearnMore />} />
            <Route path="budgets" element={<Budgets />} />
            <Route path="investing" element={<Investing />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="auth" element={<AuthForm />} />
            <Route path="app/*" element={<AppLayout />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

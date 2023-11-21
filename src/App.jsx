import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landingPage/Landing";
import LearnMore from "./pages/landingPage/LearnMore";
import Budgets from "./pages/landingPage/Budgets";
import Investing from "./pages/landingPage/Investing";
import Pricing from "./pages/landingPage/pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/app/AppLayout";
import AuthForm from "./components/AuthForm.jsx";
import useUserData from "./hooks/useUserData.js";

function App() {
  const { user, isLoading } = useUserData();
  const { id } = user;
  const userKeys = Object.keys(user).length;

  return (
    <>
      <div className="bg-zinc-100 h-screen py-4 px-10">
        <BrowserRouter>
          <Routes>
            <Route index element={<Landing userRole={user.role} />} />
            <Route path="learn-more" element={<LearnMore />} />
            <Route path="budgets" element={<Budgets />} />
            <Route path="investing" element={<Investing />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="auth" element={<AuthForm />} />
            <Route
              path="app/*"
              element={<AppLayout userKeys={userKeys} userID={id} />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

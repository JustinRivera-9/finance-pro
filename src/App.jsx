import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Landing from "./pages/landingPage/Landing";
import LearnMore from "./pages/landingPage/LearnMore";
import Budgets from "./pages/landingPage/Budgets";
import Investing from "./pages/landingPage/Investing";
import Pricing from "./pages/landingPage/pricing";
import AppLayout from "./ui/layout/AppLayout";
import useGetUser from "./services/useGetUser.js";
import AuthForm from "./ui/AuthForm.jsx";
import PageNotFound from "./ui/PageNotFound.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  const { userId, isLoading } = useGetUser();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <div className="pt-4 pb-[80px]">
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
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#141414",
            color: "#48ff00",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;

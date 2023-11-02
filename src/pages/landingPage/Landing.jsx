import { Button } from "@mui/material";
import NavBar from "../../components/landingPage/NavBar";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <NavBar />
      <div className="w-7/12 pb-20">
        <div className="flex flex-col mt-16 pl-16">
          <p className="text-7xl text-sky-800" style={{ color: "#1769aa" }}>
            Personal Finance. <br></br>All in One Place.
          </p>
          <p className="text-4xl mt-8 mb-12 text-slate-900">
            Budgets, Investments and Resources all in one place. Take back
            control of your personal finance today!
          </p>
          <div className="flex space-x-8">
            <Link to="/learn-more">
              <Button
                variant="outlined"
                size="medium"
                sx={{
                  fontSize: "2rem",
                  color: "#1769aa",
                  border: "1px solid #1769aa",
                }}
              >
                Learn More
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button
                variant="contained"
                size="medium"
                sx={{ fontSize: "2rem" }}
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

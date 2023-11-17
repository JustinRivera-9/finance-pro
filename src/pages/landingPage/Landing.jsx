import { Button } from "@mui/material";
import NavBar from "../../components/landingPage/NavBar";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <NavBar />
      <div className="w-8/12 pb-20">
        <div className="flex flex-col mt-16 pl-16">
          <p className="text-6xl text-sky-500">
            Financial Freedom<br></br>
            <span className="text-5xl">Your Journey Starts Here</span>
          </p>
          <p className="text-3xl mt-8 mb-12 text-slate-900">
            Tools and Resources to give you access to a wealth of resources like
            budget and portfilio tracking all in one place!
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
            <Link to="/auth">
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

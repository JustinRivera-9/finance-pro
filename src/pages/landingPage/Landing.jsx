import { Button } from "@mui/material";
import NavBar from "../../components/landingPage/NavBar";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <NavBar />
      <div className="w-7/12">
        <div className="flex flex-col mt-16">
          <p className="text-9xl text-cyan-600 ml-24">
            Personal Finance. <br></br>All in One Place.
          </p>
          <p className="text-6xl ml-24 my-16">
            Budgets, Investments and Resources all in one place. Take back
            control of your personal finance today!
          </p>
        </div>
        <div className="w-1/2 m-auto flex justify-around">
          <Link to="/learn-more">
            <Button variant="outlined" size="medium" sx={{ fontSize: "2rem" }}>
              Learn More
            </Button>
          </Link>
          <Link to="/sign-up">
            <Button variant="contained" size="medium" sx={{ fontSize: "2rem" }}>
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

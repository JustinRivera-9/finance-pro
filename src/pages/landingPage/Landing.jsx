import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import NavBarLanding from "../../ui/NavBarLanding";

function LandingPage({ userId }) {
  const navigate = useNavigate();

  if (userId) navigate("/app");

  return (
    <>
      <NavBarLanding />
      <div className="w-8/12 pb-20">
        <div className="flex flex-col mt-16 pl-16">
          <p className="text-4xl">
            Financial Freedom<br></br>
            <span className="text-4xl">Your Journey Starts Here</span>
          </p>
          <p className="text-3xl mt-8 mb-12">
            Tools and Resources to give you access to a wealth of resources like
            budget and portfilio tracking all in one place!
          </p>
          <div className="flex space-x-8">
            <Link to="/learn-more">
              <Button
                size="large"
                sx={{
                  color: "secondary",
                }}
              >
                Learn More
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="contained" size="large">
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

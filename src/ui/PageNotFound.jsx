import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const defaultError = {
  heading: "404",
  subHeading: "You found a secret place",
  message:
    "Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL.",
};

function PageNotFound({
  heading = defaultError.heading,
  subHeading = defaultError.subHeading,
  message = defaultError.message,
}) {
  return (
    <div className="bg-blue-300 h-screen">
      <div className="mx-auto pt-20">
        <h1 className="text-center text-7xl text-slate-800">{heading}</h1>
        <h2 className="text-center text-zinc-600 text-5xl mt-12">
          {subHeading}
        </h2>
        <p className="mx-auto text-center text-zinc-600 text-3xl mt-12 w-2/3">
          {message}
        </p>
        <Link to="/">
          <Button
            variant="contained"
            sx={{ marginTop: "3rem", fontSize: "1.25rem" }}
          >
            Back to home page
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;

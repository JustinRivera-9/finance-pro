import { Button } from "@mui/material";

function PageNotFound() {
  return (
    <div className="bg-blue-300 h-screen">
      <div className="mx-auto pt-20">
        <h1 className="text-center text-7xl text-slate-800">404</h1>
        <h2 className="text-center text-zinc-600 text-5xl mt-12">
          You have found a secret place.
        </h2>
        <p className="text-center text-zinc-600 text-3xl mt-12">
          Unfortunately, this is only a 404 page. You may have mistyped<br></br>{" "}
          the address, or the page has been moved to another URL.
        </p>
        <Button
          variant="contained"
          sx={{ marginLeft: "38%", marginTop: "3rem", fontSize: "1.25rem" }}
        >
          Take me back to home page
        </Button>
      </div>
    </div>
  );
}

export default PageNotFound;

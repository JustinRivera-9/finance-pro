import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import NavBarLanding from "../../ui/NavBarLanding";
import supabase from "../../services/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

function LandingPage({ userId }) {
  // const navigate = useNavigate();

  // if (userId) navigate("/app");

  const navigate = useNavigate();

  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN") navigate(`/app`);
  });

  return (
    <div className="flex flex-col justify-center w-full mt-12 space-y-10">
      <div className="rounded-xl bg-zinc-700 px-6 py-4 mx-auto w-4/5">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["google"]}
        />
      </div>
      <div className="flex flex-col mx-auto bg-[#494949] p-6 rounded-xl">
        <p className="text-2xl text-[#48ff00] mb-4">Demo Account Credentials</p>
        <p className="text-xl mb-2">
          <span className="font-bold mr-4">Email: </span>john.doe@email.com
        </p>
        <p className="text-xl">
          <span className="font-bold mr-4">Password: </span>Finance123
        </p>
      </div>
    </div>
  );

  // return (
  //   <>
  //     <NavBarLanding />
  //     <div className="w-8/12 pb-20">
  //       <div className="flex flex-col mt-16 pl-16">
  //         <p className="text-4xl">
  //           Financial Freedom<br></br>
  //           <span className="text-4xl">Your Journey Starts Here</span>
  //         </p>
  //         <p className="text-3xl mt-8 mb-12">
  //           Tools and Resources to give you access to a wealth of resources like
  //           budget and portfilio tracking all in one place!
  //         </p>
  //         <div className="flex space-x-8">
  //           <Link to="/learn-more">
  //             <Button
  //               size="large"
  //               sx={{
  //                 color: "secondary",
  //               }}
  //             >
  //               Learn More
  //             </Button>
  //           </Link>
  //           <Link to="/auth">
  //             <Button variant="contained" size="large">
  //               Sign Up
  //             </Button>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
}

export default LandingPage;

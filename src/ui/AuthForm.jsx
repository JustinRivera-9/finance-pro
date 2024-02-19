import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router";
import supabase from "../services/supabase";

function AuthForm() {
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
}

export default AuthForm;

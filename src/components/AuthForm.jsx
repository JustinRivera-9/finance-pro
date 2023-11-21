import { Auth } from "@supabase/auth-ui-react";
import supabase from "../config/supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useUserData from "../hooks/useUserData";
import { useNavigate } from "react-router";

function AuthForm() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN") navigate("/app");
  });

  return (
    <div className="flex justif-center">
      <div className="w-1/3 rounded-xl bg-zinc-700 px-8 py-4 mx-auto">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["google", "facebook", "apple"]}
        />
      </div>
    </div>
  );
}

export default AuthForm;

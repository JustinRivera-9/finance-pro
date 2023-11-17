import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router";
import supabase from "../config/supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";

function AuthForm() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    console.log(event);
    if (event !== "SIGNED_OUT") {
      navigate("/app");
    } else {
      navigate("/");
    }
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

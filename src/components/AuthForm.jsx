import { Auth } from "@supabase/auth-ui-react";
import supabase from "../config/supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useUserData from "../hooks/useUserData";

function AuthForm() {
  // console.log(<Auth />);

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

import { Auth } from "@supabase/auth-ui-react";
import supabase from "../config/supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";

function AuthForm() {
  useEffect(() => {
    async function googleAuth() {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });
      console.log(data, error);
    }
    googleAuth();
  }, []);

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

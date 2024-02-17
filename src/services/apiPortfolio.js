import { supabase } from "@supabase/auth-ui-shared";

export const getPortfolio = async (userId) => {
  console.log(userId);

  let { data: portfolio, error } = await supabase
    .from("portfolio")
    .select("some_column,other_column");

  if (error) throw new Error(error.message);

  return portfolio;
};

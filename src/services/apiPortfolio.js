import supabase from "./supabase";

export const getPortfolio = async (userId) => {
  let { data: portfolio, error } = await supabase
    .from("portfolio")
    .select("portfolio")
    .eq("user_id", userId);

  if (error) {
    console.log(error);
    throw new Error(
      "Portfolio could not be loaded. Please refresh and try again."
    );
  }

  return portfolio[0].portfolio;
};

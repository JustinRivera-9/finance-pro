import supabase from "./supabase";

export const getBudgetCategories = async (userId) => {
  let { data, error } = await supabase
    .from("budget")
    .select("budgetCategories")
    .eq("user_id", userId);

  if (error)
    throw new Error(
      "Budget categories could not be loaded. Please refresh and try again."
    );

  return data;
};

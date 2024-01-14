import supabase from "../supabase";

export const getBudgetGoal = async (userId) => {
  let { data, error } = await supabase
    .from("budget")
    .select("budgetGoals:categories")
    .eq("user_id", userId);

  if (error)
    throw new Error(
      "Budget goals could not be loaded. Please refresh and try again."
    );

  return data;
};

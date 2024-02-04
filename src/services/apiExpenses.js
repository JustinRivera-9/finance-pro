import supabase from "./supabase";

export const getExpenses = async (userId) => {
  let { data: expenses, error } = await supabase
    .from("expenses")
    .select("expenses")
    .eq("user_id", userId);

  if (error)
    throw new Error("There was an issue getting expenses. Please try again.");

  return expenses[0];
};

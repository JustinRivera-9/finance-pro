import supabase from "./supabase";

export const getExpenses = async (userId) => {
  let { data, error } = await supabase
    .from("expenses")
    .select("expenses")
    .eq("user_id", userId);

  if (error)
    throw new Error("There was an issue getting expenses. Please try again.");

  const { expenses } = data[0];
  return expenses;
};

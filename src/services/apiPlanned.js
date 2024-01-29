import supabase from "./supabase";

export const getPlannedCategories = async (userId) => {
  let { data, error } = await supabase
    .from("planned")
    .select("plannedCategories")
    .eq("user_id", userId);

  if (error)
    throw new Error(
      "Budget categories could not be loaded. Please refresh and try again."
    );

  return data;
};

export const addPlannedCategory = async (newCategory) => {
  console.log(newCategory);
};

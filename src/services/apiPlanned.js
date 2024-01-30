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
  const [category, userId] = newCategory;

  let { data } = await supabase
    .from("planned")
    .select("plannedCategories")
    .eq("user_id", userId);

  const tempData = data[0].plannedCategories;
  const newPlannedCategories = [...tempData, category];
  const plannedCategories = [...newPlannedCategories];

  const { error } = await supabase
    .from("planned")
    .update({ plannedCategories })
    .eq("user_id", userId);

  if (error)
    throw new Error(
      "Category could not be added. Please refresh and try again."
    );
};

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

  // converts to array of objects. Combines prev w/ new
  const prevData = await getPlannedCategories(userId);
  const tempPrevData = prevData[0].plannedCategories;
  const oldCategories = [...tempPrevData];
  const plannedCategories = [...oldCategories, category];

  // Updates database w/ new array
  const { error } = await supabase
    .from("planned")
    .update({ plannedCategories })
    .eq("user_id", userId);

  if (error)
    throw new Error(
      "Category could not be added. Please refresh and try again."
    );
};

export const deletePlannedCategory = async (categoryInfo) => {
  const { categoryId, userId } = categoryInfo;

  // converts to array of objects. Combines prev w/ new
  const prevData = await getPlannedCategories(userId);
  const tempPrevData = prevData[0].plannedCategories;
  const oldCategories = [...tempPrevData];

  const plannedCategories = oldCategories.filter((el) => el.id !== categoryId);

  // Updates database w/ new array
  const { error } = await supabase
    .from("planned")
    .update({ plannedCategories })
    .eq("user_id", userId);

  if (error)
    throw new Error(
      "Category could not be added. Please refresh and try again."
    );
};

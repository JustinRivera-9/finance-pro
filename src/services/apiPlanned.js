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

  // Converts response data to array of objects
  const prevData = await getPlannedCategories(userId);
  const tempPrevData = prevData[0].plannedCategories;
  const oldCategories = [...tempPrevData];

  // Checks if object already exists in array
  const isEdit = oldCategories.some((el) => el.id === category.id);

  if (!isEdit) {
    // Combines old array with new category object
    const plannedCategories = [...oldCategories, category];

    const { error } = await supabase
      .from("planned")
      .update({ plannedCategories })
      .eq("user_id", userId);

    if (error)
      throw new Error(
        "Category could not be added. Please refresh and try again."
      );
  } else {
    // Gets index of item being updated
    const idx = oldCategories.findIndex((el) => el.id === category.id);
    // Mutates item within array
    oldCategories[idx] = category;

    const plannedCategories = oldCategories;

    // Updates database w/ new array
    const { error } = await supabase
      .from("planned")
      .update({ plannedCategories })
      .eq("user_id", userId);

    if (error)
      throw new Error(
        "Category could not be added. Please refresh and try again."
      );
  }
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

import supabase from "./supabase";

export const getSettings = async (userId) => {
  let { data: dataArr, error } = await supabase
    .from("settings")
    .select("*")
    .eq("user_id", userId);

  let data = dataArr[0];

  if (error)
    throw new Error(
      "Account settings could not be loaded. Please refresh and try again."
    );

  return data;
};

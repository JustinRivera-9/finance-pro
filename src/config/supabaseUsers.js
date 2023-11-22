import supabase from "./supabaseClient";

export async function addNewUser(userID, userEmail) {
  const { data, error } = await supabase
    .from("users")
    .insert([{ user_id: userID, email: userEmail }])
    .select();

  //   console.log(data, error);
}

export async function getUserList() {
  try {
    let { data: users, error } = await supabase.from("users").select("*");
    return { users, error };
  } catch (err) {
    console.error(err);
  }
}

import { expenseArrayMutation } from "../utils/helperFunctions";
import { getPlannedCategories } from "./apiPlanned";
import supabase from "./supabase";

export const getExpenses = async (userId) => {
  // Gets categories from planned table and sets JSON shape
  const tempCategories = await getPlannedCategories(userId);
  const { plannedCategories } = tempCategories[0];
  const categories = plannedCategories
    .filter((el) => el.type === "expense")
    .map((el) => {
      return {
        categoryName: el.category,
        plannedAmount: el.amount,
        spentAmount: null,
        expenses2024: [],
      };
    });

  let { data, error } = await supabase
    .from("expenses")
    .select("expenses")
    .eq("user_id", userId);

  if (error)
    throw new Error("There was an issue getting expenses. Please try again.");

  const expensesArr = data[0].expenses;

  const expenses = expenseArrayMutation(categories, expensesArr);
  return { expenses };
};

export const addExpense = async (expense) => {
  const [newExpense, userId] = expense;

  console.log(userId);
  console.log(newExpense);
};

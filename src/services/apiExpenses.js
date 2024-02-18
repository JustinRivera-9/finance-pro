import { expenseArrayMutation, reduceArr } from "../utils/helperFunctions";
import { getPlannedCategories } from "./apiPlanned";
import supabase from "./supabase";

export const getExpenses = async (userId, monthFilter) => {
  // Gets categories from planned table and sets JSON shape
  const tempCategories = await getPlannedCategories(userId);
  const { plannedCategories } = tempCategories[0];
  const categories = plannedCategories
    .filter((el) => el.type === "expense")
    .map((el) => {
      return {
        isFixed: el.isFixed,
        categoryName: el.category,
        plannedAmount: el.amount,
        spentAmount: null,
        fixedDate: el.fixedDate,
        expenses2024: [],
      };
    });

  let { data, error } = await supabase
    .from("expenses")
    .select("expenses")
    .eq("user_id", userId);

  if (error)
    throw new Error(
      "There was an issue getting your expenses. Please try again."
    );

  const expensesArr = data[0].expenses;

  const expenses = expenseArrayMutation(categories, expensesArr, monthFilter);
  return { expenses };
};

export const addExpense = async ({ expenses, newExpense, userId }) => {
  // Find index of category that matches new expense
  const categoryIdx = expenses.findIndex(
    (el) => el.categoryName === newExpense.categoryName
  );

  // Determines if edit or add session by checking if expense already exists
  const isEdit = expenses[categoryIdx]?.expenses2024.some(
    (el) => el.id === newExpense.id
  );

  ////////// HANDLES UPDATING AN EXISTING EXPENSE
  if (isEdit) {
    // Gets index of expense to edit
    const expenseIdx = expenses[categoryIdx]?.expenses2024.findIndex(
      (el) => el.id === newExpense.id
    );

    // Mutates the expense item
    expenses[categoryIdx].expenses2024[expenseIdx] = {
      ...newExpense,
      amount: Number(newExpense.amount),
    };

    // Mutates the spent amount
    expenses[categoryIdx].spentAmount = reduceArr(
      expenses[categoryIdx].expenses2024
    );

    const { error } = await supabase
      .from("expenses")
      .update({ expenses })
      .eq("user_id", userId);

    if (error) throw new Error("Issue updating expense. Please try again.");
  }

  ////////// HANDLES ADDING NEW EXPENSE
  if (!isEdit) {
    const updatedExpenses = [newExpense, ...expenses[categoryIdx].expenses2024];
    expenses[categoryIdx].expenses2024 = updatedExpenses;

    const { error } = await supabase
      .from("expenses")
      .update({ expenses })
      .eq("user_id", userId);

    if (error) throw new Error("Issue adding new expense");
  }
};

export const deleteExpense = async ({ expenses, expense, userId }) => {
  const categoryIdx = expenses.findIndex(
    (el) => el.categoryName === expense.categoryName
  );

  const catgeoryExpenses = expenses[categoryIdx].expenses2024;
  const updatedCategoryExpenses = catgeoryExpenses.filter(
    (el) => el.id !== expense.id
  );

  expenses[categoryIdx].expenses2024 = updatedCategoryExpenses;

  const { error } = await supabase
    .from("expenses")
    .update({ expenses })
    .eq("user_id", userId);

  if (error) throw new Error("Issue deleting expense. Please try again.");
};

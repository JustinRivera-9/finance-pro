import { v4 as uuidv4 } from "uuid";

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const formatCurrency = (value) => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const createNewArray = (length) => {
  let array = new Array(length);
  for (let i = 1; i < array.length; i++) {
    array[i] = i;
  }
  array.shift();

  return array;
};

export const reduceArr = (arr) => {
  return arr.map((el) => Number(el.amount)).reduce((acc, cur) => acc + cur, 0);
};

export const expenseArrayMutation = (categoryArr, expensesArr) => {
  const updatedArray = categoryArr.map((categoryEl) => {
    const expenseEl = expensesArr.find(
      (expense) => categoryEl.categoryName === expense.categoryName
    );

    if (expenseEl) {
      const spentAmount = reduceArr(expenseEl?.expenses2024);

      return {
        ...categoryEl,
        expenses2024: [...expenseEl.expenses2024],
        spentAmount,
      };
    } else {
      return {
        ...categoryEl,
        expenses2024: [],
        spentAmount: 0,
      };
    }
  });

  return updatedArray;
};

export const formatExpenseDate = (date) => {
  const arr = date.split(" ");
  const [_, day, month] = arr;
  const formattedDate = [month, day].join(" ");

  return formattedDate;
};

export const prepareSpentPieChartData = (expenses) => {
  const updatedData = expenses.map((category) => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    // Changes color on each render
    const categoryObj = {
      id: uuidv4(),
      value: category.spentAmount.toFixed(2),
      label: category.categoryName,
      color: category.color || randomColor,
    };
    return categoryObj;
  });
  return updatedData;
};

export const prepareSpentBarChartData = (expenses) => {
  const updatedData = expenses.map((el) => {
    const updatedObj = {
      plannedAmount: el.plannedAmount,
      spentAmount: el.spentAmount,
      category: el.categoryName,
    };
    return updatedObj;
  });
  return updatedData;
};

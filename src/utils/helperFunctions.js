import { v4 as uuidv4 } from "uuid";

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const formatCurrency = (value, rounded) => {
  if (rounded) {
    const number = Math.round(+value);

    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(number);
  } else {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }
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

export const expenseArrayMutation = (categoryArr, expensesArr, monthFilter) => {
  const updatedArray = categoryArr.map((categoryEl) => {
    const expenseEl = expensesArr.find(
      (expense) => categoryEl.categoryName === expense.categoryName
    );

    if (expenseEl) {
      const spentAmount = reduceArr(
        expenseEl?.expenses2024.filter(
          (el) => el.date.split(" ")[0] === monthFilter
        )
      );

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
  const randomColorArr = [
    "#458f02",
    "#9a02ef",
    "#8a9add",
    "#d3fe1d",
    "#663521",
    "#312073",
    "#c283ea",
    "#f16807",
    "#8ae703",
    "#46c1f1",
    "#748eef",
    "#19c898",
    "#f03dac",
    "#522db0",
    "#2d7ea2",
    "#837dad",
    "#fcd696",
    "#8d5d95",
    "#e6e3f0",
    "#520e4e",
    "#c224b1",
    "#ad4ec2",
    "#968947",
    "#25bc25",
    "#87a66a",
    "#d18ec2",
    "#b81c9f",
    "#733c42",
    "#842374",
    "#cd3497",
    "#42b449",
    "#488427",
    "#5ec2f8",
    "#4074d7",
    "#60a41d",
    "#e35525",
    "#1d064e",
  ];

  const updatedData = expenses.map((category, i) => {
    const categoryObj = {
      id: uuidv4(),
      value: category.spentAmount.toFixed(2),
      label: category.categoryName,
      color: randomColorArr[i],
    };
    return categoryObj;
  });
  return updatedData;
};

export const prepareSpentBarChartData = (expenses) => {
  const updatedData = expenses
    .filter((el) => !el.isFixed)
    .map((el) => {
      const updatedObj = {
        plannedAmount: +el.plannedAmount.toFixed(2),
        spentAmount: +el.spentAmount.toFixed(2),
        category: el.categoryName.split(" ")[0],
      };
      return updatedObj;
    });
  return updatedData;
};

export const monthFilterExpenseData = (expenses, month) => {
  const filteredExpenses = expenses.map((el) => {
    return {
      ...el,
      expenses2024: el.expenses2024.filter(
        (expense) => expense.date.split(" ")[0] === month
      ),
    };
  });

  return filteredExpenses;
};

export const monthArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const prepareAverageSpend = (expenses) => {
  // Returns array of objects for all expenses
  const allExpenses = expenses.flatMap((el) => el.expenses2024);

  // Returns an array of objects containing only the Month and amount
  const expensesByMonth = allExpenses.map((el) => {
    return { month: el.date.split(" ")[0], amount: +el.amount };
  });

  // Returns object containing all expenses grouped by month
  const finalArr = Object.groupBy(expensesByMonth, (expense) =>
    expense.month.toLowerCase()
  );

  // Converts object to array of array and reduces the array to a single value
  const arrKeys = Object.entries(finalArr);
  arrKeys.forEach((el) => {
    return (el[1] = reduceArr(el[1]));
  });

  const totalSpend = arrKeys.reduce((acc, cur) => acc + cur[1], 0);
  const averageSpend = totalSpend / arrKeys.length;

  return averageSpend;
};

export const prepareExpensesByMonth = (expenses) => {
  // Returns array of objects for all expenses
  const allExpenses = expenses.flatMap((el) => el.expenses2024);

  // Returns an array of objects containing only the Month and amount
  const expensesByMonth = allExpenses.map((el) => {
    return { month: el.date.split(" ")[0], amount: +el.amount };
  });

  // Returns object containing all expenses grouped by month
  const finalArr = Object.groupBy(expensesByMonth, (expense) => expense.month);

  // Converts object to array of array and reduces the array to a single value
  const arrKeys = Object.entries(finalArr);
  arrKeys.forEach((el) => {
    return (el[1] = reduceArr(el[1]));
  });

  const monthExpenses = arrKeys.map((el) => {
    const [month, amount] = el;
    return { month, amount: +amount.toFixed(2) };
  });

  return monthExpenses;
};

export const prepareExpensesByCategory = (expenses) => {
  // Returns array of objects for all expenses
  const allExpenses = expenses.flatMap((el) => el.expenses2024);

  // Returns an array of objects containing only the category and amount
  const expensesByCategory = allExpenses.map((el) => {
    return { categoryName: el.categoryName, amount: +el.amount };
  });

  // Returns object containing all expenses grouped by category
  const finalArr = Object.groupBy(
    expensesByCategory,
    (expense) => expense.categoryName
  );

  // Converts object to array of array and reduces the array to a single value
  const arrKeys = Object.entries(finalArr);
  arrKeys.forEach((el) => {
    return (el[1] = reduceArr(el[1]));
  });

  const categoryExpenses = arrKeys.map((el) => {
    const [categoryName, amount] = el;
    return { categoryName, amount: +amount.toFixed(2) };
  });

  return categoryExpenses;
};

export const formatExpenseFormDate = (date) => {
  const formattedDate = [monthArr[date.$M], `${date.$D}`].join(" ");

  return formattedDate;
};

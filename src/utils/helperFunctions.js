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
  console.log(expenses);
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

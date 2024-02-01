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
  return arr.map((el) => el.amount).reduce((acc, cur) => acc + cur, 0);
};

export const apiKey = "cn8n9b1r01qocbpgp3s0cn8n9b1r01qocbpgp3sg";

export const getStockQuote = async (ticker = "TSLA") => {
  const res = await fetch(
    `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${apiKey}`
  );
  const data = await res.json();

  console.log(data);
};

export const getStockNews = async (stockArr = "TSLA") => {
  // forEach stock in array, fetch news
  const res = await fetch(
    `https://finnhub.io/api/v1/company-news?symbol=${stockArr}&from=2023-08-15&to=2023-08-20&token=${apiKey}`
  );
  const data = await res.json();

  console.log(data);
};

export const getSearchResults = async (query) => {
  const res = await fetch(
    `https://finnhub.io/api/v1/search?q=${query}&token=${apiKey}`
  );
  const data = await res.json();
  return data;
};

import { useContext, useState } from "react";
import PortfolioAccordian from "../../../components/investing/portfolio/PortfolioAccordian";
import { AuthContext } from "../../../utils/context";
import { useQuery } from "@tanstack/react-query";
import { getPortfolio } from "../../../services/apiPortfolio";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import { Button } from "@mui/material";
import SearchForm from "../../../components/investing/addStockForm/searchForm";
import { getSearchResults } from "../../../services/apiStockInfo";

const tempData = [
  {
    portfolioName: "401k",
    brokerage: "Fidelity",
    value: 41431,
    valueChange: { dollarChange: 17701, percentChange: 74.59 },
    stocks: [
      {
        id: 1,
        logo: "LOGO",
        name: "Tesla",
        ticker: "TSLA",
        investment: {
          sharePrice: 199.95,
          totalPosition: 14996,
          numShares: 75,
          costBasis: 87.38,
          stockPriceChange: { dollarChange: -0.5, percentChange: -0.25 },
          dayChange: { dollarChange: -37.5, percentChange: -0.25 },
          totalChange: { dollarChange: 8443, percentChange: 128.83 },
        },
      },
      {
        id: 2,
        logo: "LOGO",
        name: "Apple",
        ticker: "APPL",
        investment: {
          sharePrice: 182.31,
          totalPosition: 8546,
          numShares: 145,
          costBasis: 118.46,
          stockPriceChange: { dollarChange: 1.56, percentChange: 0.74 },
          dayChange: { dollarChange: 226.2, percentChange: 0.74 },
          totalChange: { dollarChange: 2486, percentChange: 24 },
        },
      },
    ],
  },

  {
    portfolioName: "Home Fund",
    brokerage: "Robinhood",
    value: 16937,
    valueChange: { dollarChange: -747.52, percentChange: -4.23 },
    stocks: [
      {
        id: 3,
        logo: "LOGO",
        name: "Tesla",
        ticker: "TSLA",
        investment: {
          sharePrice: 199.95,
          totalPosition: 12197,
          numShares: 61,
          costBasis: 234.56,
          stockPriceChange: { dollarChange: -0.5, percentChange: -0.25 },
          dayChange: { dollarChange: -14, percentChange: -0.25 },
          totalChange: { dollarChange: 1157, percentChange: 26.04 },
        },
      },
      {
        id: 4,
        logo: "LOGO",
        name: "Apple",
        ticker: "APPL",
        investment: {
          sharePrice: 182.31,
          totalPosition: 8751,
          numShares: 26,
          costBasis: 129.86,
          stockPriceChange: { dollarChange: 1.56, percentChange: 0.74 },
          dayChange: { dollarChange: 74.88, percentChange: 0.74 },
          totalChange: { dollarChange: 4150, percentChange: 90.18 },
        },
      },
    ],
  },
];

function Portfolio() {
  const [formOpen, setFormOpen] = useState(false);
  const userId = useContext(AuthContext);

  ///////////////////////// This comment is for production only. React Query is set up to read portfolio from database. The next steps are to sync the database with the stock API. Need to make sure performance doesn't become issue with prices constantly changing
  /*
  const {
    data: portfolios,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["portfolio", userId],
    queryFn: () => getPortfolio(userId),
  });

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  if (error) {
    return <h2>There was an error: {error.message}</h2>;
  }
  */

  return (
    <div className="flex flex-col justify-center text-3xl mt-6">
      {formOpen && <SearchForm formOpen={formOpen} setFormOpen={setFormOpen} />}
      <ul className="flex flex-col space-y-4 px-6 md:flex-row md:flex-wrap md:justify-center md:space-x-4 w-full">
        {tempData.map((el) => (
          <PortfolioAccordian key={el.portfolioName} portfolio={el} />
        ))}
      </ul>
      <Button
        variant="contained"
        sx={{
          fontSize: "1.25rem",
          width: "fit-content",
          margin: "1.5rem auto",
          borderRadius: "2rem",
        }}
        onClick={() => setFormOpen((show) => !show)}
      >
        Add Stock
      </Button>
    </div>
  );
}

export default Portfolio;

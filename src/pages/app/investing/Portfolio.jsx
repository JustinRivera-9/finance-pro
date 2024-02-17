import { useContext } from "react";
import PortfolioAccordian from "../../../components/investing/portfolio/PortfolioAccordian";
import { AuthContext } from "../../../utils/context";
import { useQuery } from "@tanstack/react-query";
import { getPortfolio } from "../../../services/apiPortfolio";
import LoadingSpinner from "../../../ui/LoadingSpinner";

// const tempData = [
//   {
//     portfolioName: "401k",
//     brokerage: "Fidelity",
//     value: 12359,
//     valueChange: { dollarChange: 420.69, percentChange: 3.21 },
//     stocks: [
//       {
//         id: uuidv4(),
//         logo: "LOGO",
//         name: "Tesla",
//         ticker: "TSLA",
//         investment: {
//           sharePrice: 189.59,
//           totalPosition: 12825,
//           numShares: 52,
//           costBasis: 158.67,
//           stockChange: { dollarChange: -4.82, percentChange: -2.61 },
//           dayChange: { dollarChange: -250.67, percentChange: -2.61 },
//           totalChange: { dollarChange: 4569, percentChange: +152 },
//         },
//       },
//       {
//         id: uuidv4(),
//         logo: "LOGO",
//         name: "Apple",
//         ticker: "APPL",
//         investment: {
//           sharePrice: 243.75,
//           totalPosition: 8546,
//           numShares: 85,
//           costBasis: 84.32,
//           stockChange: { dollarChange: 1.56, percentChange: 0.74 },
//           dayChange: { dollarChange: 78.42, percentChange: 0.74 },
//           totalChange: { dollarChange: 2486, percentChange: +24 },
//         },
//       },
//     ],
//   },

//   {
//     portfolioName: "Home Fund",
//     brokerage: "Robinhood",
//     value: -4563,
//     valueChange: { dollarChange: -648.65, percentChange: -6.91 },
//     stocks: [
//       {
//         id: uuidv4(),
//         logo: "LOGO",
//         name: "Tesla",
//         ticker: "TSLA",
//         investment: {
//           sharePrice: 243.75,
//           totalPosition: 12825,
//           numShares: 52,
//           costBasis: 158.67,
//           stockChange: { dollarChange: -4.82, percentChange: -2.61 },
//           dayChange: { dollarChange: -250.67, percentChange: -2.61 },
//           totalChange: { dollarChange: 4569, percentChange: +152 },
//         },
//       },
//       {
//         id: uuidv4(),
//         logo: "LOGO",
//         name: "Apple",
//         ticker: "APPL",
//         investment: {
//           sharePrice: 243.75,
//           totalPosition: 8546,
//           numShares: 85,
//           costBasis: 84.32,
//           stockChange: { dollarChange: 1.56, percentChange: 0.74 },
//           dayChange: { dollarChange: 78.42, percentChange: 0.74 },
//           totalChange: { dollarChange: 2486, percentChange: +24 },
//         },
//       },
//     ],
//   },

//   {
//     portfolioName: "HSA",
//     brokerage: "Fidelity",
//     value: 12359,
//     valueChange: { dollarChange: 420.69, percentChange: 3.21 },
//     stocks: [
//       {
//         id: uuidv4(),
//         logo: "LOGO",
//         name: "Tesla",
//         ticker: "TSLA",
//         investment: {
//           sharePrice: 189.51,
//           totalPosition: 12825,
//           numShares: 52,
//           costBasis: 158.67,
//           stockChange: { dollarChange: -4.82, percentChange: -2.61 },
//           dayChange: { dollarChange: -250.67, percentChange: -2.61 },
//           totalChange: { dollarChange: 4569, percentChange: +152 },
//         },
//       },
//       {
//         id: uuidv4(),
//         logo: "LOGO",
//         name: "Apple",
//         ticker: "APPL",
//         investment: {
//           sharePrice: 243.75,
//           totalPosition: 8546,
//           numShares: 85,
//           costBasis: 84.32,
//           stockChange: { dollarChange: 1.56, percentChange: 0.74 },
//           dayChange: { dollarChange: 78.42, percentChange: 0.74 },
//           totalChange: { dollarChange: 2486, percentChange: +24 },
//         },
//       },
//     ],
//   },
// ];

function Portfolio() {
  const userId = useContext(AuthContext);

  const { data, isLoading, error } = useQuery({
    queryKey: ["portfolio", userId],
    queryFn: () => getPortfolio(userId),
  });

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  if (error) {
    return <h2>There was an error: {error.message}</h2>;
  }

  return (
    <div className="flex justify-center text-3xl mt-6">
      <ul className="flex flex-col space-y-4 px-6 md:flex-row md:flex-wrap md:justify-center md:space-x-4 w-full">
        {data.map((el) => (
          <PortfolioAccordian key={el.portfolioName} portfolio={el} />
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;

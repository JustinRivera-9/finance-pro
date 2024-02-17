import AccordionList from "../../../components/investing/portfolio/AccordionList";

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
  return (
    <div className="flex justify-center text-3xl mt-6">
      <AccordionList />
    </div>
  );
}

export default Portfolio;

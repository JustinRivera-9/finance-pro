import PortfolioAccordian from "./PortfolioAccordian";

// DATA SHAPE
// portfolioName: "Home Fund",
// brokerage: "Robinhood",
// value: 12359,
// valueChange: { dollar: 420.69, percent: 3.21 },
// stocks: [],

function AccordianList({ data }) {
  // Data should be array of objects.
  // Replace the key prop with something unique
  return (
    <ul className="flex flex-col space-y-4 px-6 md:flex-row md:flex-wrap md:justify-center md:space-x-4 w-full">
      {/* Each element is a different portfolio */}
      {data.map((el) => (
        <PortfolioAccordian key={el.portfolioName} portfolio={el} />
      ))}
    </ul>
  );
}

export default AccordianList;

import PortfolioAccordian from "./PortfolioAccordian";

function AccordionList({ data }) {
  return (
    <ul className="flex flex-col space-y-4 px-6 md:flex-row md:flex-wrap md:justify-center md:space-x-4 w-full">
      {data.map((el) => (
        <PortfolioAccordian key={el.portfolioName} portfolio={el} />
      ))}
    </ul>
  );
}

export default AccordionList;

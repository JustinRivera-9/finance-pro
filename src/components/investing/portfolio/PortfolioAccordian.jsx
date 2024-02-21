import StockAccordion from "./StockAccordion";
import PortfolioCard from "./PortfolioCard";

import { useState } from "react";

function PortfolioAccordian({ portfolio }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="flex flex-col space-y-4 py-4 bg-[#404040] rounded-xl md:w-2/5 md:h-fit">
      <PortfolioCard data={portfolio} isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <ul className="flex flex-col space-y-4 w-full px-4">
          {portfolio.stocks.map((el) => (
            <StockAccordion key={el.id} stock={el} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default PortfolioAccordian;

import PortfolioAccordian from "./PortfolioAccordian";
import LoadingSpinner from "../../../ui/LoadingSpinner";

import { AuthContext } from "../../../utils/context";
import { getPortfolio } from "../../../services/apiPortfolio";

import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

function AccordionList() {
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
    <ul className="flex flex-col space-y-4 px-6 md:flex-row md:flex-wrap md:justify-center md:space-x-4 w-full">
      {data.map((el) => (
        <PortfolioAccordian key={el.portfolioName} portfolio={el} />
      ))}
    </ul>
  );
}

export default AccordionList;

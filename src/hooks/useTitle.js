import { useEffect } from "react";

export const useTitle = (str) => {
  useEffect(() => {
    document.title = str;

    return () => (document.title = "The Ultimate Quiz");
  }, [str]);
};

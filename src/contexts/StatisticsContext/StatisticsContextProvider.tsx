import React from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import StatisticsContext from "./StatisticsContex";

const StatisticsContextProvider = ({
  children,
}: {
  children: ReactJSXElement;
}) => {
  return (
    <StatisticsContext.Provider value={{}}>
      {children}
    </StatisticsContext.Provider>
  );
};

export default StatisticsContextProvider;

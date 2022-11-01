import React from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import StatisticsContext from "./StatisticsContex";
import { useState } from "react";

const StatisticsContextProvider = ({
  children,
}: {
  children: ReactJSXElement;
}) => {
  const [selectStatistic, setSelectStatistic] = useState("");
  const [roomsData, setRoomsData] = useState();
  return (
    <StatisticsContext.Provider
      value={{ selectStatistic, setSelectStatistic, roomsData, setRoomsData }}
    >
      {children}
    </StatisticsContext.Provider>
  );
};

export default StatisticsContextProvider;

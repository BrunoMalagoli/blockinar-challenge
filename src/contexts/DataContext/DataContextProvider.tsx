import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import DataContext from "./DataContext";
import { useState } from "react";

const DataContextProvider = ({ children }: { children: ReactJSXElement }) => {
  const [allRoomsData, setAllRoomsData] = useState(undefined);
  return (
    <DataContext.Provider value={{ allRoomsData, setAllRoomsData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

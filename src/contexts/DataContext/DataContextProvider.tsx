import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import DataContext from "./DataContext";
import { useState } from "react";

const DataContextProvider = ({ children }: { children: ReactJSXElement }) => {
  const [allRoomsData, setAllRoomsData] = useState(undefined);
  const [allBookingsData, setAllBookingsData] = useState(undefined);
  return (
    <DataContext.Provider
      value={{
        allRoomsData,
        setAllRoomsData,
        allBookingsData,
        setAllBookingsData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

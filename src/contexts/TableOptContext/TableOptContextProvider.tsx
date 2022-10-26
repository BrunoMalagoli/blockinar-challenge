import TableOptContext from "./TableOptContext";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useState } from "react";

const TableOptContextProvider = ({
  children,
}: {
  children: ReactJSXElement;
}) => {
  const [roomsContextArray, setRoomsContextArray] = useState([]);
  const [orderedAlphabetic, setOrderedAlphabetic] = useState(false);
  const [sortedContextArray, setSortedContextArray] = useState([]);
  const [orderedByRoom, setOrderedByRoom] = useState("");

  return (
    <TableOptContext.Provider
      value={{
        orderedAlphabetic,
        setOrderedAlphabetic,
        orderedByRoom,
        setOrderedByRoom,
      }}
    >
      {children}
    </TableOptContext.Provider>
  );
};

export default TableOptContextProvider;

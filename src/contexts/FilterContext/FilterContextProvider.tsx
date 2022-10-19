import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import FilterContext from "./FilterContext";
import { useState } from "react";

const FilterContextProvider = ({ children }: { children: ReactJSXElement }) => {
  const [boookingIdFilter, setBookingIdFilter] = useState();
  const [bookingLastnameFilter, setBookingLastnameFilter] = useState("");
  const [bookingDateFilter, setBookingDateFilter] = useState();
  return (
    <FilterContext.Provider
      value={{
        boookingIdFilter,
        setBookingIdFilter,
        bookingLastnameFilter,
        setBookingLastnameFilter,
        bookingDateFilter,
        setBookingDateFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;

import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import FilterContext from "./FilterContext";
import { useState } from "react";

const FilterContextProvider = ({ children }: { children: ReactJSXElement }) => {
  const [bookingIdFilter, setBookingIdFilter] = useState("");
  const [bookingLastnameFilter, setBookingLastnameFilter] = useState("");
  const [bookingDateFilter, setBookingDateFilter] = useState("");
  const [applyFilters, setApplyFilters] = useState(false);
  const [filteredArray, setFilteredArray] = useState([]);
  return (
    <FilterContext.Provider
      value={{
        bookingIdFilter,
        setBookingIdFilter,
        bookingLastnameFilter,
        setBookingLastnameFilter,
        bookingDateFilter,
        setBookingDateFilter,
        applyFilters,
        setApplyFilters,
        filteredArray,
        setFilteredArray,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;

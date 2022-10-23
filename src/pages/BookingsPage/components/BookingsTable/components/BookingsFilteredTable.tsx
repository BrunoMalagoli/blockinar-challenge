import { useContext, useState, useEffect } from "react";
import FilterContext from "../../../../../contexts/FilterContext/FilterContext";
import { bookingItemType } from "../../../types";
import DefaultBookingRow from "./DefaultBookingRow";
import LoaderSpinner from "../../../../../components/LoaderSpinner";
import useAlphFilter from "../../../../../hooks/useAlphFilter";
import TableOptContext from "../../../../../contexts/TableOptContext/TableOptContext";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import useRoomFilter from "../../../../../hooks/useRoomFilter";
const BookingsFilteredTable = ({ children }: { children: ReactJSXElement }) => {
  const { filteredArray, applyFilters } = useContext(FilterContext);
  const { orderedByRoom, orderedAlphabetic } = useContext(TableOptContext);
  const { memoizedSortedArray } = useAlphFilter(filteredArray);
  const { memoizedRoomArray } = useRoomFilter(filteredArray);
  return (
    <>
      {applyFilters ? (
        filteredArray ? (
          orderedAlphabetic ? (
            memoizedSortedArray.map((bookingItem: bookingItemType) => {
              return (
                <DefaultBookingRow key={bookingItem.id} {...bookingItem} />
              );
            })
          ) : orderedByRoom.length > 1 ? (
            memoizedRoomArray.map((bookingItem: bookingItemType) => {
              return (
                <DefaultBookingRow key={bookingItem.id} {...bookingItem} />
              );
            })
          ) : (
            filteredArray.map((bookingItem: bookingItemType) => {
              return (
                <DefaultBookingRow key={bookingItem.id} {...bookingItem} />
              );
            })
          )
        ) : (
          <LoaderSpinner />
        )
      ) : (
        children
      )}
    </>
  );
};
export default BookingsFilteredTable;

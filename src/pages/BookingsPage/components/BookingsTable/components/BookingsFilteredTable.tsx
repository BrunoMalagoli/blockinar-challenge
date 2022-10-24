import { useContext, useState, useEffect } from "react";
import FilterContext from "../../../../../contexts/FilterContext/FilterContext";
import { bookingItemType } from "../../../types";
import DefaultBookingRow from "./DefaultBookingRow";
import LoaderSpinner from "../../../../../components/LoaderSpinner";
import useAlphFilter from "../../../../../hooks/useAlphFilter";
import TableOptContext from "../../../../../contexts/TableOptContext/TableOptContext";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import useRoomFilter from "../../../../../hooks/useRoomFilter";
import getRoomCategory from "../utils/BookingRoomCategory";
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
            orderedByRoom.length > 1 ? (
              memoizedSortedArray
                .slice()
                .filter((bookingItem: bookingItemType) => {
                  let roomCategory = getRoomCategory(bookingItem.room_id);
                  return bookingItem.room_category
                    ? bookingItem.room_category
                    : roomCategory == orderedByRoom;
                })
                .map((bookingItem: bookingItemType) => {
                  return (
                    <DefaultBookingRow key={bookingItem.id} {...bookingItem} />
                  );
                })
            ) : (
              memoizedSortedArray.map((bookingItem: bookingItemType) => {
                return (
                  <DefaultBookingRow key={bookingItem.id} {...bookingItem} />
                );
              })
            )
          ) : orderedByRoom.length > 1 ? (
            orderedAlphabetic ? (
              memoizedRoomArray
                ?.slice()
                .sort((a: bookingItemType, b: bookingItemType) => {
                  return a.last_name.localeCompare(b.last_name);
                })
                .map((bookingItem: bookingItemType) => {
                  return (
                    <DefaultBookingRow key={bookingItem.id} {...bookingItem} />
                  );
                })
            ) : (
              memoizedRoomArray?.map((bookingItem: bookingItemType) => {
                return (
                  <DefaultBookingRow key={bookingItem.id} {...bookingItem} />
                );
              })
            )
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

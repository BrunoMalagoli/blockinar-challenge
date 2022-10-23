import { useContext, useMemo } from "react";
import DataContext from "../contexts/DataContext/DataContext";
import { bookingItemType } from "../pages/BookingsPage/types";
function sortArray(data: bookingItemType[]) {
  let dataArray = data
    ? data.slice().sort((a: bookingItemType, b: bookingItemType) => {
        return a.last_name.localeCompare(b.last_name);
      })
    : null;
  return dataArray;
}
export default function useAlphFilter(data?: bookingItemType[]): any {
  const { allBookingsData } = useContext(DataContext);
  const memoizedSortedArray = useMemo(
    () => sortArray(data ? data : allBookingsData),
    [allBookingsData, data]
  );
  return { memoizedSortedArray };
}

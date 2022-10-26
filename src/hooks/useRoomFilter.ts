import { useContext, useMemo } from "react";
import DataContext from "../contexts/DataContext/DataContext";
import TableOptContext from "../contexts/TableOptContext/TableOptContext";
import filterRooms from "../pages/BookingsPage/components/BookingsTable/utils/FilterRooms";
import { bookingItemType } from "../pages/BookingsPage/types/index";

export default function useRoomFilter(data?: bookingItemType[]) {
  const { allBookingsData } = useContext(DataContext);
  const { orderedByRoom } = useContext(TableOptContext);
  const memoizedRoomArray = useMemo(
    () => filterRooms(data ? data : allBookingsData, orderedByRoom),
    [orderedByRoom, data, allBookingsData]
  );
  return { memoizedRoomArray };
}

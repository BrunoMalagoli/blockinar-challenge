import { useContext, useMemo } from "react";
import DataContext from "../contexts/DataContext/DataContext";
import TableOptContext from "../contexts/TableOptContext/TableOptContext";
import getRoomCategory from "../pages/BookingsPage/components/BookingsTable/utils/BookingRoomCategory";
import { bookingItemType } from "../pages/BookingsPage/types";

function filterByRoom(roomsArray: bookingItemType[], roomFilter: string) {
  if (roomFilter == "All") {
    return roomsArray;
  } else {
    return roomsArray.filter((bookingItem: bookingItemType) => {
      let roomCategory = getRoomCategory(bookingItem.room_id);
      return bookingItem.room_category
        ? bookingItem.room_category
        : roomCategory == roomFilter;
    });
  }
}

export default function useRoomFilter(data?: bookingItemType[]) {
  const { allBookingsData } = useContext(DataContext);
  const { orderedByRoom } = useContext(TableOptContext);
  const memoizedRoomArray = useMemo(
    () => filterByRoom(data ? data : allBookingsData, orderedByRoom),
    [orderedByRoom, data, allBookingsData]
  );

  return { memoizedRoomArray };
}

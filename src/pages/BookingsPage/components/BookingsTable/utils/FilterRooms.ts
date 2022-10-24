import { bookingItemType } from "../../../types/index";
import getRoomCategory from "./BookingRoomCategory";
export default function filterRooms(
  roomsArray: bookingItemType[],
  roomFilter: string
) {
  if (roomFilter == "All" || roomFilter.length < 1) {
    return roomsArray;
  } else {
    let filteredArray = roomsArray
      ? roomsArray.filter((bookingItem: bookingItemType) => {
          let roomCategory = getRoomCategory(bookingItem.room_id);
          return bookingItem.room_category
            ? bookingItem.room_category
            : roomCategory == roomFilter;
        })
      : null;
    return filteredArray;
  }
}

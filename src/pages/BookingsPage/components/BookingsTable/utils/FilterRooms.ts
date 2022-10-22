import { bookingItemType } from "../../../types/index";
import getRoomCategory from "./BookingRoomCatergory";
export default function filterRooms(
  roomsArray: bookingItemType[],
  roomFilter: string
) {
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

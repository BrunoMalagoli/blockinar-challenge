export default function getRoomCategory(bookingItemRoomId: number) {
  let category;
  switch (true) {
    case bookingItemRoomId < 4:
      category = "Confort";
      break;
    case bookingItemRoomId > 4 && bookingItemRoomId < 7:
      category = "Superior";
      break;
    case bookingItemRoomId > 7 && bookingItemRoomId < 9:
      category = "Junior Suite";
      break;
    case bookingItemRoomId > 9:
      category = "Senior Suite";
      break;
    default:
      category = "Room not assigned";
      break;
  }
  return category;
}
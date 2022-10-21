import { Box, TableCell, TableRow } from "@mui/material";
import { bookingItemType } from "../../../types/index";
import getRoomCategory from "../utils/BookingRoomCatergory";

const DefaultBookingRow = (bookingItem: bookingItemType) => {
  let roomCategory = getRoomCategory(bookingItem.room_id);
  return (
    <TableRow>
      <TableCell>{bookingItem.id}</TableCell>
      <TableCell>{roomCategory}</TableCell>
      <TableCell>
        `{bookingItem.last_name},{bookingItem.first_name}`
      </TableCell>
      <TableCell>{bookingItem.number_of_guests}</TableCell>
      <TableCell>
        <Box
          bgcolor={
            bookingItem.booking_status == "confirmed"
              ? "#abfc95"
              : bookingItem.booking_status == "in house"
              ? "#fbff8f"
              : "#f79683"
          }
        >
          {bookingItem.booking_status}
        </Box>
      </TableCell>
      <TableCell>{bookingItem.check_in_date}</TableCell>
      <TableCell>{bookingItem.check_out_date}</TableCell>
      <TableCell>{bookingItem.price_per_night}</TableCell>
    </TableRow>
  );
};

export default DefaultBookingRow;

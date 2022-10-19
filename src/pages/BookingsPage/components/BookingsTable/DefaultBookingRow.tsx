import { Box, TableCell, TableRow } from "@mui/material";
import React from "react";
import { bookingItemType } from "../../types/index";

const DefaultBookingRow = (bookingItem: bookingItemType) => {
  return (
    <TableRow>
      <TableCell>{bookingItem.id}</TableCell>
      <TableCell>{bookingItem.room_id}</TableCell>
      <TableCell>
        `{bookingItem.last_name},{bookingItem.first_name}`
      </TableCell>
      <TableCell>{bookingItem.number_of_guests}</TableCell>
      <TableCell>
        <Box
          bgcolor={
            bookingItem.booking_status == "confirmed" ? "#abfc95" : "#f79683"
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

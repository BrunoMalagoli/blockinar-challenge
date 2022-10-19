import {
  Box,
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext } from "react";
import DataContext from "../../../../contexts/DataContext/DataContext";
import { bookingItemType } from "../../types";
import DefaultBookingRow from "./DefaultBookingRow";
const BookingsTable = () => {
  const { allBookingsData } = useContext(DataContext);
  return (
    <>
      {allBookingsData ? (
        <Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Booking-Id:</TableCell>
                  <TableCell>Room-Id:</TableCell>
                  <TableCell>Guest</TableCell>
                  <TableCell>Guest N°</TableCell>
                  <TableCell>Status:</TableCell>
                  <TableCell>Check-In:</TableCell>
                  <TableCell>Check-Out:</TableCell>
                  <TableCell>Price:</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allBookingsData.map((bookingItem: bookingItemType) => {
                  return (
                    <DefaultBookingRow key={bookingItem.id} {...bookingItem} />
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Stack
          height={"100vh"}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CircularProgress />
        </Stack>
      )}
    </>
  );
};

export default BookingsTable;

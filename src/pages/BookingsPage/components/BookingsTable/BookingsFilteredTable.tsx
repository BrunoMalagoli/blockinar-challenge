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
import { useContext, useState } from "react";
import FilterContext from "../../../../contexts/FilterContext/FilterContext";
import { bookingItemType } from "../../types";
import DefaultBookingRow from "./DefaultBookingRow";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import styles from "./styles/BookingsTable.module.css";
const BookingsFilteredTable = () => {
  const { filteredArray } = useContext(FilterContext);
  const [orderedAlphabetic, setOrderedAlphabetic] = useState(false);
  const [orderedArray, setOrderedArray] = useState([]);

  function handleClick() {
    setOrderedAlphabetic(!orderedAlphabetic);
    //Using Slice method to get a copy of the array and order it without mutating original array
    setOrderedArray(
      filteredArray.slice().sort((a: bookingItemType, b: bookingItemType) => {
        return a.last_name.localeCompare(b.last_name);
      })
    );
  }
  return (
    <>
      {filteredArray ? (
        <Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Booking-Id:</TableCell>
                  <TableCell>Room-Id:</TableCell>
                  <TableCell
                    className={styles.guestRowHeader}
                    onClick={handleClick}
                  >
                    <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
                      Guest
                      {orderedAlphabetic ? (
                        <TextDecreaseIcon />
                      ) : (
                        <SortByAlphaIcon />
                      )}
                    </Stack>
                  </TableCell>
                  <TableCell>Guest N°</TableCell>
                  <TableCell>Status:</TableCell>
                  <TableCell>Check-In:</TableCell>
                  <TableCell>Check-Out:</TableCell>
                  <TableCell>Price:</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderedAlphabetic
                  ? orderedArray.map((bookingItem: bookingItemType) => {
                      return (
                        <DefaultBookingRow
                          key={bookingItem.id}
                          {...bookingItem}
                        />
                      );
                    })
                  : filteredArray.map((bookingItem: bookingItemType) => {
                      return (
                        <DefaultBookingRow
                          key={bookingItem.id}
                          {...bookingItem}
                        />
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
export default BookingsFilteredTable;

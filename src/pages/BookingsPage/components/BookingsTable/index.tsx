import {
  Box,
  FormControl,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../../../contexts/DataContext/DataContext";
import { bookingItemType } from "../../types";
import DefaultBookingRow from "./components/DefaultBookingRow";
import styles from "./styles/BookingsTable.module.css";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import FilterContext from "../../../../contexts/FilterContext/FilterContext";
import filterBookingData from "../../../../utils/FilterBookingData";
import BookingsFilteredTable from "./components/BookingsFilteredTable";
import LoaderSpinner from "../../../../components/LoaderSpinner";
import filterRooms from "./utils/FilterRooms";
import TableOptContext from "../../../../contexts/TableOptContext/TableOptContext";
import useAlphFilter from "../../../../hooks/useAlphFilter";

const BookingsTable = () => {
  const { allBookingsData } = useContext(DataContext);
  const {
    applyFilters,
    bookingIdFilter,
    bookingLastnameFilter,
    bookingDateFilter,
    setFilteredArray,
  } = useContext(FilterContext);
  const {
    orderedByRoom,
    setOrderedByRoom,
    orderedAlphabetic,
    setOrderedAlphabetic,
  } = useContext(TableOptContext);
  const { memoizedSortedArray } = useAlphFilter();
  const [roomsArray, setRoomsArray] = useState<bookingItemType[]>([]);
  useEffect(() => {
    let filterValues = {
      idFilter: Math.floor(bookingIdFilter),
      lastNameFilter: bookingLastnameFilter,
      dateFilter: bookingDateFilter,
    };
    if (applyFilters == true) {
      let response = filterBookingData(allBookingsData, filterValues);
      response.then((res) => {
        setFilteredArray(res);
      });
    }
    if (orderedByRoom.length > 1) {
      setRoomsArray(filterRooms(allBookingsData, orderedByRoom));
    }
  }, [orderedByRoom, applyFilters]);

  function handleClick() {
    setOrderedAlphabetic(!orderedAlphabetic);
    setOrderedByRoom("All");
  }
  function handleRoomFilterChange(event: SelectChangeEvent<string>) {
    let selectedRoomFilter = event.target.value;
    setOrderedByRoom(selectedRoomFilter);
    setOrderedAlphabetic(false);
  }
  return (
    <>
      {allBookingsData ? (
        <Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Booking-Id:</TableCell>
                  <TableCell>
                    <Stack alignItems={"center"} flexDirection={"row"}>
                      <Box>Rooms:</Box>
                      <FormControl size="small">
                        <Select
                          value={orderedByRoom}
                          onChange={handleRoomFilterChange}
                        >
                          <MenuItem value={"All"}>All</MenuItem>
                          <MenuItem value={"Confort"}>Confort</MenuItem>
                          <MenuItem value={"Junior Suite"}>
                            Junior Suite
                          </MenuItem>
                          <MenuItem value={"Senior Suite"}>
                            Senior Suite
                          </MenuItem>
                          <MenuItem value={"Superior"}>Superior</MenuItem>
                          <MenuItem value={"Room not assigned"}>
                            Not Assigned
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Stack>
                  </TableCell>
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
                <BookingsFilteredTable>
                  {orderedAlphabetic
                    ? memoizedSortedArray
                      ? memoizedSortedArray.map(
                          (bookingItem: bookingItemType) => {
                            return (
                              <DefaultBookingRow
                                key={bookingItem.id}
                                {...bookingItem}
                              />
                            );
                          }
                        )
                      : null
                    : orderedByRoom.length > 1
                    ? roomsArray?.map((bookingItem: bookingItemType) => {
                        return (
                          <DefaultBookingRow
                            key={bookingItem.id}
                            {...bookingItem}
                          />
                        );
                      })
                    : allBookingsData.map((bookingItem: bookingItemType) => {
                        return (
                          <DefaultBookingRow
                            key={bookingItem.id}
                            {...bookingItem}
                          />
                        );
                      })}
                </BookingsFilteredTable>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <LoaderSpinner />
      )}
    </>
  );
};

export default BookingsTable;

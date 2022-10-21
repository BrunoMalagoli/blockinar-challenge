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

const BookingsTable = () => {
  const { allBookingsData } = useContext(DataContext);
  const {
    applyFilters,
    bookingIdFilter,
    bookingLastnameFilter,
    bookingDateFilter,
    setFilteredArray,
  } = useContext(FilterContext);
  const [orderedAlphabetic, setOrderedAlphabetic] = useState(false);
  const [orderedArray, setOrderedArray] = useState([]);
  const [orderedByRoom, setOrderedByRoom] = useState("");
  useEffect(() => {
    let filterValues = {
      idFilter: Math.floor(bookingIdFilter),
      lastNameFilter: bookingLastnameFilter,
      dateFilter: bookingDateFilter,
    };
    console.log(filterValues);
    if (applyFilters == true) {
      let response = filterBookingData(allBookingsData, filterValues);
      response.then((res) => setFilteredArray(res));
    }
  }, [applyFilters]);
  function handleClick() {
    setOrderedAlphabetic(!orderedAlphabetic);
    //Using Slice method to get a copy of the array and order it without mutating original array
    setOrderedArray(
      allBookingsData.slice().sort((a: bookingItemType, b: bookingItemType) => {
        return a.last_name.localeCompare(b.last_name);
      })
    );
  }
  function handleRoomFilterChange(event: SelectChangeEvent<string>) {
    setOrderedByRoom(event.target.value);
  }
  return (
    <>
      {applyFilters ? (
        <BookingsFilteredTable />
      ) : allBookingsData ? (
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
                          <MenuItem value={""}>All</MenuItem>
                          <MenuItem value={"Confort"}>Confort</MenuItem>
                          <MenuItem value={"JuniorSuite"}>
                            Junior Suite
                          </MenuItem>
                          <MenuItem value={"SeniorSuite"}>
                            Senior Suite
                          </MenuItem>
                          <MenuItem value={"Superior"}>Superior</MenuItem>
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
                {orderedAlphabetic
                  ? orderedArray.map((bookingItem: bookingItemType) => {
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

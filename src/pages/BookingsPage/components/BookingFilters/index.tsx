import { Box, Stack, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import FilterContext from "../../../../contexts/FilterContext/FilterContext";

const BookingFilters = () => {
  const {
    bookingIdFilter,
    setBookingIdFilter,
    bookingLastnameFilter,
    setBookingLastnameFilter,
    bookingDateFilter,
    setBookingDateFilter,
  } = useContext(FilterContext);
  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    switch (event.target.id) {
      case "idFilter":
        setBookingIdFilter(event.target.value);
        break;
      case "lastnameFilter":
        setBookingLastnameFilter(event.target.value);
        break;
      case "dateFilter":
        setBookingDateFilter(event.target.value);
        break;
      default:
        console.log("Filter non existent");
        break;
    }
  }
  return (
    <Stack marginTop={"2%"} height={{ xs: "25vh", sm: "12vh" }}>
      <Stack
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
        flexDirection={"row"}
      >
        <Box width={{ xs: "40%", sm: "15%" }}>
          <TextField
            placeholder="id"
            id="idFilter"
            type={"number"}
            onChange={(e) => handleChange(e)}
            value={bookingIdFilter}
            label={"Booking id"}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>

        <Box width={{ xs: "40%", sm: "20%" }}>
          <TextField
            placeholder="Lastname"
            id="lastnameFilter"
            onChange={(e) => handleChange(e)}
            label={"Guest's lastname"}
            value={bookingLastnameFilter}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box
          marginTop={{ xs: "2%", sm: "0%" }}
          textAlign={"center"}
          width={{ xs: "100%", sm: "15%" }}
        >
          <TextField
            type={"date"}
            id="dateFilter"
            value={bookingDateFilter}
            onChange={(e) => handleChange(e)}
            placeholder="DD/MM/YYYY"
            label={"Check-in Date"}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default BookingFilters;

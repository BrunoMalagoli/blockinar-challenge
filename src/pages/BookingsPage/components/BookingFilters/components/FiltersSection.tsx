import { Box, Button, Stack, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import FilterContext from "../../../../../contexts/FilterContext/FilterContext";
const FiltersSection = () => {
  const {
    bookingIdFilter,
    bookingLastnameFilter,
    bookingDateFilter,
    applyFilters,
    setApplyFilters,
    setBookingIdFilter,
    setBookingLastnameFilter,
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

  function handleClick() {
    setApplyFilters(!applyFilters);
    if (applyFilters) {
      setBookingIdFilter("");
      setBookingDateFilter("");
      setBookingLastnameFilter("");
    }
  }
  return (
    <Stack height={{ xs: "25vh", sm: "25vh" }}>
      <Stack
        justifyContent={"space-evenly"}
        width={"100%"}
        flexDirection={"row"}
      >
        <Box width={{ xs: "40%", sm: "20%" }}>
          <TextField
            placeholder="id"
            id="idFilter"
            disabled={applyFilters ? true : false}
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
            disabled={applyFilters ? true : false}
            onChange={(e) => handleChange(e)}
            label={"Guest's lastname"}
            value={bookingLastnameFilter}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </Stack>
      <Stack
        width={"100%"}
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        marginTop={"2%"}
      >
        <Box
          marginTop={{ xs: "2%", sm: "0%" }}
          width={{ xs: "40%", sm: "20%" }}
        >
          <TextField
            type={"date"}
            id="dateFilter"
            disabled={applyFilters ? true : false}
            value={bookingDateFilter === null ? "" : bookingDateFilter}
            onChange={(e) => handleChange(e)}
            placeholder="DD/MM/YYYY"
            label={"Check-in Date"}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box width={{ xs: "40%", sm: "20%" }}>
          <Stack
            height={"100%"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Button
              onClick={handleClick}
              variant="contained"
              color={applyFilters ? "error" : "success"}
            >
              {applyFilters ? "Remove Filters" : "Apply Filters"}
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default FiltersSection;

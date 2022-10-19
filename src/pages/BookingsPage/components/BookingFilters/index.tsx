import { Box, Stack, TextField } from "@mui/material";

const BookingFilters = () => {
  return (
    <Stack marginTop={"2%"} height={{ xs: "40vh", sm: "12vh" }}>
      <Stack
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
        flexDirection={"row"}
      >
        <Box width={{ xs: "40%", sm: "15%" }}>
          <TextField
            placeholder="id"
            label={"Booking id"}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>

        <Box width={{ xs: "40%", sm: "20%" }}>
          <TextField
            placeholder="Lastname"
            label={"Guest's lastname"}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box
          marginTop={{ xs: "2%", sm: "0%" }}
          textAlign={"center"}
          width={{ xs: "100%", sm: "20%" }}
        >
          <TextField
            type={"date"}
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

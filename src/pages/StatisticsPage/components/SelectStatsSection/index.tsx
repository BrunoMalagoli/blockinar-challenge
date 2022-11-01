import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box, Stack } from "@mui/system";

const SelectStatsSection = () => {
  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"10vh"}
      marginY={"10px"}
    >
      <Box width={{ xs: "60%", sm: "30%" }}>
        <FormControl fullWidth>
          <InputLabel id="selectStat">Select Statistic</InputLabel>
          <Select fullWidth id="selectStat" name="selectStat">
            <MenuItem>Bookings</MenuItem>
            <MenuItem>Rooms</MenuItem>
            <MenuItem>Revenue</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Stack>
  );
};

export default SelectStatsSection;

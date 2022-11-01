import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useContext, useEffect } from "react";
import StatisticsContext from "../../../../contexts/StatisticsContext/StatisticsContex";

const SelectStatsSection = () => {
  const { selectStatistic, setSelectStatistic } = useContext(StatisticsContext);
  useEffect(() => {
    setSelectStatistic("bookings");
  }, []);
  function handleChange(event: SelectChangeEvent<any>) {
    setSelectStatistic(event.target.value);
  }
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
          <Select
            value={selectStatistic}
            onChange={handleChange}
            fullWidth
            id="selectStat"
            name="selectStat"
          >
            <MenuItem value="bookings">Bookings</MenuItem>
            <MenuItem value="rooms">Rooms</MenuItem>
            <MenuItem>Revenue</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Stack>
  );
};

export default SelectStatsSection;

import { useState, useEffect, useContext } from "react";
import LoaderSpinner from "../../../../components/LoaderSpinner";
import DataContext from "../../../../contexts/DataContext/DataContext";
import getBookings from "../../../../services/Bookings";
import currentMonthBookings from "./utils/currentMonthBookings";
import { bookingItemType } from "../../../BookingsPage/types/index";
import { Stack, Typography } from "@mui/material";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import bookingsPerDay from "./utils/bookingsPerDay";
import { Box } from "@mui/system";

const BookingStatistics = () => {
  const { allBookingsData } = useContext(DataContext);
  const [monthBookings, setMonthBookings] = useState<bookingItemType[]>([]);
  const [bookingsNum, setBookingsNum] = useState<any>();
  useEffect(() => {
    if (allBookingsData === undefined) {
      getBookings().then((res) => {
        currentMonthBookings(res).then(async (response) => {
          setBookingsNum(await bookingsPerDay(response));
        });
      });
    } else {
      currentMonthBookings(allBookingsData).then(async (response) => {
        setMonthBookings(response),
          setBookingsNum(await bookingsPerDay(response));
      });
    }
  }, []);
  return (
    <>
      <Stack justifyContent={"center"} alignItems={"center"} height={"15vh"}>
        <Box
          width={"60%"}
          textAlign={"center"}
          color={"#00FF99"}
          bgcolor={"#00001E"}
          borderRadius={"5px"}
        >
          <Typography fontSize={"25px"}>Current month bookings</Typography>
        </Box>
      </Stack>
      {monthBookings ? (
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"50vh"}
          width={"100%"}
        >
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <AreaChart
              width={500}
              height={400}
              data={bookingsNum}
              margin={{
                top: 10,
                right: 50,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={"bookingDay"} />
              <YAxis type="number" domain={[0, 15]} />
              <Tooltip />
              <Legend />
              <Area
                type={"monotone"}
                dataKey="numberOfBookings"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type={"monotone"}
                dataKey="confirmedBookings"
                stroke="#00EB65"
                fill="#00EB65"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Stack>
      ) : (
        <LoaderSpinner />
      )}
    </>
  );
};

export default BookingStatistics;

import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../../../contexts/DataContext/DataContext";
import getRooms from "../../../../services/Rooms";
import getRoomOcuppation from "./utils/getRoomOcuppation";

const RoomStatistics = () => {
  const { allRoomsData } = useContext(DataContext);
  const [roomOccupation, setRoomOccupation] = useState<any>();
  useEffect(() => {
    if (allRoomsData === undefined) {
      getRooms().then(async (res) => {
        setRoomOccupation(await getRoomOcuppation(res));
      });
    } else {
      getRoomOcuppation(allRoomsData).then((res) => setRoomOccupation(res));
    }
  }, [allRoomsData]);
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
          <Typography fontSize={"25px"}>
            Today's room occupation percentage
          </Typography>
        </Box>
      </Stack>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"50vh"}
        width={"100%"}
      >
        <ResponsiveContainer height={"100%"} width={"100%"}>
          <PieChart width={400} height={400}>
            <Pie
              fill="#65a579"
              data={roomOccupation}
              dataKey={"value"}
              key={"type"}
              label={(type) => type.type}
              isAnimationActive
              labelLine
            >
              <Cell key={"type"} fill={"#00EB65"} />
              <Cell key={"type"} fill={"#8884d8"} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Stack>
      <Stack flexDirection={"row"} justifyContent={"center"} gap={3}>
        <Box borderRadius={"5px"} padding={"5px"} bgcolor={"#8884d8"}>
          <Typography>
            Unnocupated Rooms: {roomOccupation ? roomOccupation[1].value : null}
            {" %"}
          </Typography>
        </Box>
        <Box borderRadius={"5px"} padding={"5px"} bgcolor={"#00EB65"}>
          <Typography>
            Ocupated Rooms: {roomOccupation ? roomOccupation[0].value : null}
            {" %"}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default RoomStatistics;

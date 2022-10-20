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
import { useContext } from "react";
import DataContext from "../../../../contexts/DataContext/DataContext";
import { roomItem } from "../types";

const RoomDataTable = () => {
  const { allRoomsData } = useContext(DataContext);
  console.log(allRoomsData);
  return allRoomsData ? (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Room Id:</TableCell>
              <TableCell>Category:</TableCell>
              <TableCell>Ocuppancy:</TableCell>
              <TableCell>Max-Occupancy:</TableCell>
              <TableCell>Status:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allRoomsData.map((item: roomItem) => {
              item.status =
                item.occupancy == item.max_occupancy
                  ? "Full"
                  : item.occupancy > 0
                  ? "Ocuppied"
                  : "Free";
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.occupancy}</TableCell>
                  <TableCell>{item.max_occupancy}</TableCell>
                  <TableCell>
                    <Box
                      bgcolor={
                        item.status == "Full"
                          ? "#f79683"
                          : item.status == "Ocuppied"
                          ? "#fbff8f"
                          : "#abfc95"
                      }
                    >
                      {item.status}
                    </Box>
                  </TableCell>
                </TableRow>
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
  );
};

export default RoomDataTable;

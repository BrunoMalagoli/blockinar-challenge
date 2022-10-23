import {
  Box,
  Button,
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
import LoaderSpinner from "../../../../components/LoaderSpinner";
import DataContext from "../../../../contexts/DataContext/DataContext";
import { roomItem } from "../types";
import { utils, writeFile } from "xlsx";
import DownloadIcon from "@mui/icons-material/Download";
const RoomDataTable = () => {
  const { allRoomsData } = useContext(DataContext);
  console.log(allRoomsData);
  function downloadExcel() {
    const workSheet = utils.json_to_sheet(allRoomsData);
    const workBook = utils.book_new();
    utils.book_append_sheet(workBook, workSheet, "rooms");
    writeFile(workBook, "BlockinarRooms.xlsx");
  }
  return allRoomsData ? (
    <Box>
      <Stack marginY={"1%"} flexDirection={"row"} justifyContent={"center"}>
        <Box width={{ xs: "40%", sm: "35%", md: "25%" }}>
          <Button
            onClick={downloadExcel}
            color="success"
            fullWidth
            variant="contained"
            endIcon={<DownloadIcon />}
          >
            Download as Excel
          </Button>
        </Box>
      </Stack>
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
    <LoaderSpinner />
  );
};

export default RoomDataTable;

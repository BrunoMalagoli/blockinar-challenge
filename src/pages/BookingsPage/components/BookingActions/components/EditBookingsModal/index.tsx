import {
  IconButton,
  Typography,
  Input,
  Snackbar,
  Alert,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import getBookingById from "../../../../../../services/Bookings/getBookingById";
import { bookingItemType } from "../../../../types/index";
import EditBookingsForm from "./components/EditBookingsForm";
import getRooms from "../../../../../../services/Rooms";
import { roomType } from "../../../../../MainPage/types";
const EditBookingsModal = () => {
  const [bookingID, setBookingID] = useState<number>(0);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [bookingById, setBookingById] = useState<bookingItemType>();
  const [isError, setIsError] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<boolean>(false);
  const [roomsData, setRoomsData] = useState<roomType[] | []>([]);
  useEffect(() => {
    async function roomsSetter() {
      try {
        setRoomsData(await getRooms());
      } catch (error) {
        console.log(error);
        throw new Error(error as any);
      }
    }
    roomsSetter();
  }, []);
  const formik = useFormik({
    initialValues: {
      editBookingId: 0,
    },
    onSubmit: async ({ editBookingId }) => {
      if (editBookingId === 0) {
        setIsInvalid(true);
      } else {
        try {
          setBookingID(editBookingId);
          setIsLoading(true);
          setIsInvalid(false);
          let response = await getBookingById(editBookingId);
          if (response.status === 200) {
            setBookingById(await response.json());
            setIsLoading(false);
            setNextPage(true);
          } else {
            setIsError(true);
            setTimeout(() => {
              setIsError(false);
            }, 3000);
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
  });
  return (
    <>
      {!nextPage ? (
        <>
          <Snackbar open={isError}>
            <Alert severity={"error"}>
              Something went wrong! Please try again
            </Alert>
          </Snackbar>
          <Backdrop open={isLoading} style={{ color: "#fff", zIndex: 2 }}>
            <CircularProgress color="success" />
          </Backdrop>
          <Stack
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100%"}
            width={"100%"}
          >
            <Stack
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              height={{ xs: "100%", sm: "70%" }}
              width={"80%"}
            >
              <Box
                padding={"5px"}
                borderRadius={"5px"}
                textAlign={"center"}
                bgcolor={"#00FF99"}
                width={"80%"}
              >
                <Typography fontSize={"larger"}>
                  Insert Booking ID to be edited
                </Typography>
              </Box>
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"row"}
                width={"100%"}
              >
                <Box>
                  <form onSubmit={formik.handleSubmit}>
                    <Input
                      id="editBookingId"
                      name="editBookingId"
                      required
                      value={formik.values.editBookingId}
                      onChange={formik.handleChange}
                      placeholder="Booking ID"
                      type="number"
                    />
                    <IconButton type="submit" color={"primary"}>
                      <ArrowForwardIcon />
                    </IconButton>
                    {isInvalid ? (
                      <Typography color={"error"}>
                        Please enter a valid ID
                      </Typography>
                    ) : null}
                  </form>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </>
      ) : (
        <EditBookingsForm
          bookingID={bookingID}
          roomsData={roomsData}
          bookingById={bookingById!}
        />
      )}
    </>
  );
};

export default EditBookingsModal;

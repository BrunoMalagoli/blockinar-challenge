import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Paper,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { newBookingType } from "../../types/index";
import { FormEvent, useEffect, useState } from "react";
import ModalTitle from "./components/ModalTitle";
import postBooking from "../../utils/postBooking";

const ConfirmBookingModal = (bookingData: newBookingType) => {
  const [numNights, setNumNights] = useState(0);
  const [open, setOpen] = useState<boolean>(false);
  const [isSuccessfull, setIsSuccessfull] = useState<boolean | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    function calculateNights(dateA: string | Date, dateB: string | Date) {
      let date1 = new Date(dateA);
      let date2 = new Date(dateB);
      let timeDiff = Math.abs(date2.getTime() - date1.getTime());
      //Divided by number of miliseconds
      let numOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return numOfNights;
    }
    let numberOfNights = calculateNights(
      bookingData.check_in_date,
      bookingData.check_out_date
    );
    setNumNights(numberOfNights);
  }, [bookingData]);
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    let response = await postBooking(bookingData);
    setTimeout(() => {
      location.reload();
    }, 3000);
    if (response.status === 200) {
      setIsLoading(false);
      setOpen(true);
      setIsSuccessfull(true);
    } else {
      setIsLoading(false);
      setOpen(true);
      setIsSuccessfull(false);
    }
  }
  return (
    <>
      {/* Feedback Section */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={5000}
      >
        <Alert severity={isSuccessfull ? "success" : "error"}>
          {isSuccessfull
            ? "Booking created successfully!"
            : "Something went wrong, please try again!"}
        </Alert>
      </Snackbar>
      <Backdrop open={isLoading} style={{ color: "#fff", zIndex: 2 }}>
        <CircularProgress color="success" />
      </Backdrop>
      {/* Confirm modal component */}
      <Stack height={"100%"}>
        <form style={{ height: "100%" }} onSubmit={handleSubmit}>
          <Box height={"15%"} bgcolor={"#00FF99"}>
            <Stack
              height={"100%"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Paper elevation={1}>
                <Typography
                  component={"h2"}
                  fontSize={"larger"}
                  fontWeight={"bold"}
                  padding={"10px"}
                >
                  Confirm Booking
                </Typography>
              </Paper>
            </Stack>
          </Box>
          <Box marginTop={"10px"} height={"70%"}>
            <Box height={"25%"} width={"100%"}>
              <ModalTitle>
                <Typography fontSize={"larger"} color={"#fafafa"}>
                  Client name:
                </Typography>
              </ModalTitle>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
                height={"50%"}
                width={"100%"}
              >
                <Typography>
                  {bookingData.first_name} {bookingData.last_name}
                </Typography>
              </Stack>
            </Box>
            <Box height={"25%"} width={"100%"}>
              <ModalTitle>
                <Typography fontSize={"larger"} color={"#fafafa"}>
                  Number of Guests:
                </Typography>
              </ModalTitle>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                height={"50%"}
                width={"100%"}
              >
                <Typography>
                  {bookingData.number_of_guests
                    ? bookingData.number_of_guests
                    : "Not specified"}
                </Typography>
              </Stack>
            </Box>
            <Box height={"25%"} width={"100%"}>
              <ModalTitle>
                <Typography fontSize={"larger"} color={"#fafafa"}>
                  Nights In:
                </Typography>
              </ModalTitle>

              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                height={"50%"}
                width={"100%"}
              >
                <Typography>{numNights}</Typography>
              </Stack>
            </Box>
            <Box height={"25%"} width={"100%"}>
              <ModalTitle>
                <Typography fontSize={"larger"} color={"#fafafa"}>
                  Total price:
                </Typography>
              </ModalTitle>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                height={"50%"}
                width={"100%"}
              >
                <Typography>
                  {bookingData.price_per_night
                    ? `${bookingData.price_per_night! * numNights}$ `
                    : "Price per night was not provided"}
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Stack height={"10%"} justifyContent={"center"} alignItems={"center"}>
            <Box>
              <Button type="submit" variant="contained" color="success">
                Confirm booking
              </Button>
            </Box>
          </Stack>
        </form>
      </Stack>
    </>
  );
};

export default ConfirmBookingModal;

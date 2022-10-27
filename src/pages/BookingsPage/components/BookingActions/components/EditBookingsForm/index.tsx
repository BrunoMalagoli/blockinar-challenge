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
import { useState } from "react";
import { useFormik } from "formik";
import getBookingById from "../../utils/getBookingById";
import { bookingItemType } from "../../../../types/index";
const EditBookingsModal = () => {
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [bookingById, setBookingById] = useState<bookingItemType>();
  const [isError, setIsError] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      editBookingId: 0,
    },
    onSubmit: async ({ editBookingId }) => {
      if (editBookingId === 0) {
        setIsInvalid(true);
      } else {
        try {
          setIsLoading(true);
          setIsInvalid(false);
          console.log(editBookingId);
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
      <Snackbar open={isError}>
        <Alert severity={"error"}>Something went wrong! Please try again</Alert>
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
          height={"60%"}
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
  );
};

export default EditBookingsModal;

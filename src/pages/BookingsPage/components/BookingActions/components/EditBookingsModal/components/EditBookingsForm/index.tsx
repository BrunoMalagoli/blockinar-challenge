import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Snackbar,
  Alert,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { bookingItemType, updateBooking } from "../../../../../../types/index";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { editBookingValidationSchema } from "../../../../utils/editBookingValidationSchema";
import { useFormik } from "formik";
import GroupIcon from "@mui/icons-material/Group";
import { roomType } from "../../../../../../../MainPage/types/index";
import { useState } from "react";
import dataUpdater from "../../../../utils/dataUpdater";
import checkIsSameDate from "../../../../utils/checkIsSameDate";
const EditBookingsForm = ({
  roomsData,
  bookingById,
  bookingID,
}: {
  roomsData: roomType[];
  bookingById: bookingItemType;
  bookingID: number;
}) => {
  const [isSameDate, setIsSameDate] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSuccessfull, setIsSuccessFull] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      first_name: bookingById.first_name,
      last_name: bookingById.last_name,
      check_in_date: bookingById.check_in_date,
      check_out_date: bookingById.check_out_date,
      room_id: bookingById.room_id,
      number_of_guests: bookingById.number_of_guests,
      price_per_night: bookingById.price_per_night,
      booking_status: bookingById.booking_status,
      arrival_date: "",
    },
    validationSchema: editBookingValidationSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        if (values.booking_status !== "in house") {
          let status = await dataUpdater(bookingID, values);
          if (status === 200) {
            setIsSuccessFull(true);
            setIsOpen(true);
            setIsLoading(false);
            setTimeout(() => {
              //location.reload();
            }, 3000);
          } else {
            throw new Error();
          }
        } else if (
          await checkIsSameDate(values.arrival_date, values.check_in_date)
        ) {
          setIsSameDate(true);
          let status = await dataUpdater(bookingID, values);
          console.log(status);
          if (status === 200) {
            setIsSuccessFull(true);
            setIsOpen(true);
            setIsLoading(false);
            setTimeout(() => {
              location.reload();
            }, 3000);
          } else {
            throw new Error();
          }
        } else {
          throw new Error();
        }
      } catch (error) {
        setIsLoading(false);
        setIsSuccessFull(false);
        setIsOpen(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      }
    },
  });
  return (
    <>
      {/* Feedback Section */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isOpen}
        autoHideDuration={5000}
      >
        <Alert severity={isSuccessfull ? "success" : "error"}>
          {isSuccessfull
            ? "Booking updated successfully!"
            : "Something went wrong, please try again!"}
        </Alert>
      </Snackbar>
      <Backdrop open={isLoading} style={{ color: "#fff", zIndex: 2 }}>
        <CircularProgress color="success" />
      </Backdrop>
      {/* Component section */}
      <Stack width={"100%"} height={"100%"}>
        <Box bgcolor={"#00001E"} height={"20%"}>
          <Stack
            height={"100%"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"row"}
          >
            <Typography component={"h2"} fontSize={"larger"} color={"#fafafa"}>
              Edit booking
            </Typography>
          </Stack>
        </Box>
        <Stack height={"100%"} justifyContent={"flex-start"}>
          <form onSubmit={formik.handleSubmit}>
            <Box
              padding={{ xs: "2%", sm: "10px" }}
              paddingBottom={{ sm: "1%" }}
            >
              <Stack flexDirection={"row"} justifyContent={"space-evenly"}>
                <Box textAlign={"center"} width={"45%"}>
                  <TextField
                    id="first_name"
                    variant="outlined"
                    value={formik.values.first_name}
                    label={"First name"}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.first_name &&
                      Boolean(formik.errors.first_name)
                    }
                    helperText={
                      formik.touched.first_name && formik.errors.first_name
                    }
                  />
                </Box>
                <Box textAlign={"center"} width={"45%"}>
                  <TextField
                    id="last_name"
                    variant="outlined"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.last_name &&
                      Boolean(formik.errors.last_name)
                    }
                    helperText={
                      formik.touched.last_name && formik.errors.last_name
                    }
                    label={"Last name"}
                  />
                </Box>
              </Stack>
            </Box>
            <Box
              padding={{ xs: "2%", sm: "10px" }}
              paddingBottom={{ sm: "1%" }}
            >
              <Stack
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent={{ xs: "center", sm: "space-evenly" }}
                alignItems={"center"}
              >
                <Box textAlign={"center"} width={{ xs: "90%", sm: "40%" }}>
                  <TextField
                    id="check_in_date"
                    variant="outlined"
                    label={"Check in date"}
                    value={formik.values.check_in_date}
                    type={"datetime-local"}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.check_in_date &&
                      Boolean(formik.errors.check_in_date)
                    }
                    helperText={
                      formik.touched.check_in_date &&
                      formik.errors.check_in_date
                    }
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
                <Box
                  textAlign={"center"}
                  marginTop={{ xs: "3%", sm: "0%" }}
                  width={{ xs: "90%", sm: "40%" }}
                >
                  <TextField
                    id="check_out_date"
                    variant="outlined"
                    label={"Check out date"}
                    type={"datetime-local"}
                    onChange={formik.handleChange}
                    value={formik.values.check_out_date}
                    error={
                      formik.touched.check_out_date &&
                      Boolean(formik.errors.check_out_date)
                    }
                    helperText={
                      formik.touched.check_out_date &&
                      formik.errors.check_out_date
                    }
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
              </Stack>
            </Box>
            <Box
              padding={{ xs: "2%", sm: "15px" }}
              paddingBottom={{ xs: "0%", sm: "1%" }}
            >
              <Stack flexDirection={"row"} justifyContent={"space-evenly"}>
                <Box textAlign={"center"} width={{ xs: "35%", sm: "45%" }}>
                  <TextField
                    variant="outlined"
                    id="number_of_guests"
                    label={"N° of Guests"}
                    type={"number"}
                    onChange={formik.handleChange}
                    value={formik.values.number_of_guests}
                    error={
                      formik.touched.number_of_guests &&
                      Boolean(formik.errors.number_of_guests)
                    }
                    helperText={
                      formik.touched.number_of_guests &&
                      formik.errors.number_of_guests
                    }
                    InputProps={{
                      endAdornment: <GroupIcon />,
                    }}
                  />
                </Box>
                <Box width={{ xs: "35%", sm: "45%" }}>
                  <Stack
                    height={"100%"}
                    flexDirection={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <TextField
                      id="price_per_night"
                      variant="outlined"
                      label={"Price per night"}
                      type={"number"}
                      value={formik.values.price_per_night}
                      error={
                        formik.touched.price_per_night &&
                        Boolean(formik.errors.price_per_night)
                      }
                      helperText={
                        formik.touched.price_per_night &&
                        formik.errors.price_per_night
                      }
                      onChange={formik.handleChange}
                      InputProps={{
                        endAdornment: <AttachMoneyIcon />,
                      }}
                    >
                      Price per night
                    </TextField>
                  </Stack>
                </Box>
              </Stack>
              <Box
                padding={{ xs: "2%", sm: "15px" }}
                paddingBottom={{ xs: "0%", sm: "1%" }}
              >
                <Stack justifyContent={"space-evenly"} flexDirection={"row"}>
                  <Box width={{ xs: "35%", sm: "45%" }}>
                    <Stack>
                      <FormControl>
                        <InputLabel id="room_id">Room ID</InputLabel>
                        <Select
                          id="room_id"
                          name="room_id"
                          labelId="room_id"
                          label="Room ID"
                          value={
                            formik.values.room_id === null
                              ? "RoomNotAssigned"
                              : formik.values.room_id
                          }
                          onChange={formik.handleChange}
                        >
                          <MenuItem value="RoomNotAssigned">
                            Room not assigned
                          </MenuItem>
                          {roomsData?.map((room: roomType) => {
                            return (
                              <MenuItem key={room.id} value={room.id}>
                                <Typography
                                  width={"80%"}
                                  textAlign={"center"}
                                  bgcolor={
                                    room.occupancy > 0 ? "#f79683" : "#abfc95"
                                  }
                                >
                                  {room.id}
                                </Typography>
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Stack>
                  </Box>
                  <Box width={{ xs: "35%", sm: "45%" }}>
                    <Stack>
                      <FormControl>
                        <InputLabel id="booking_status">
                          Booking status
                        </InputLabel>
                        <Select
                          id="booking_status"
                          name="booking_status"
                          labelId="booking_status"
                          label="Booking Status"
                          value={formik.values.booking_status}
                          onChange={formik.handleChange}
                        >
                          <MenuItem value={"confirmed"}>Confirmed</MenuItem>
                          <MenuItem value={"in house"}>In-House</MenuItem>
                          <MenuItem value={"cancelled"}>Cancelled</MenuItem>
                          <MenuItem value={"checked out"}>Checked out</MenuItem>
                        </Select>
                      </FormControl>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Box>
            <Box height={"10%"}>
              <Stack
                flexDirection={"column"}
                width={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box
                  marginTop={"5px"}
                  textAlign={"center"}
                  width={{ xs: "100%", sm: "40%" }}
                >
                  <TextField
                    id="arrival_date"
                    name="arrival_date"
                    label={"Arrival date"}
                    disabled={
                      formik.values.booking_status === "in house" ? false : true
                    }
                    type={"datetime-local"}
                    value={formik.values.arrival_date}
                    error={
                      formik.values.booking_status === "in house" &&
                      !isSameDate &&
                      formik.touched.arrival_date
                    }
                    helperText={
                      formik.values.booking_status === "in house" &&
                      !isSameDate &&
                      formik.touched.arrival_date
                        ? "Arrival day has to be the same day as check in"
                        : null
                    }
                    onChange={formik.handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  ></TextField>
                </Box>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  height={"10%"}
                  marginBottom={"2px"}
                  marginTop={"4px"}
                >
                  <Box>
                    <Button type="submit" variant="contained" color="success">
                      Confirm edit
                    </Button>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </form>
        </Stack>
      </Stack>
    </>
  );
};

export default EditBookingsForm;

import { Box, Stack } from "@mui/system";
import { useFormik } from "formik";
import { Button, TextField, Typography } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { newBookingValidationSchema } from "../../utils/newBookingValidationSchema";
import { useState } from "react";
import { newBookingType } from "../../types/index";
import ConfirmBookingModal from "../ConfirmBookingModal";
const AddBookingForm = () => {
  const [bookingData, setBookingData] = useState<newBookingType>(
    {} as newBookingType
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const initialValues = {
    check_in_date: "",
    check_out_date: "",
    first_name: "",
    last_name: "",
    number_of_guests: 0,
    price_per_night: 0,
  };
  const formik = useFormik({
    initialValues,
    validationSchema: newBookingValidationSchema,
    onSubmit: (values) => {
      setBookingData(values);
      setIsSubmitted(true);
    },
  });
  return (
    <>
      {!isSubmitted ? (
        <Stack height={"100%"} width={"100%"}>
          <Box bgcolor={"#00001E"} height={"20%"}>
            <Stack
              height={"100%"}
              width={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"row"}
            >
              <Typography
                component={"h2"}
                fontSize={"larger"}
                color={"#fafafa"}
              >
                New Booking
              </Typography>
            </Stack>
          </Box>
          <Stack height={"100%"} justifyContent={"space-around"}>
            <form onSubmit={formik.handleSubmit}>
              <Box padding={{ xs: "2%", sm: "15px" }} paddingBottom={"0%"}>
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
              <Box padding={{ xs: "2%", sm: "15px" }} paddingBottom={"0%"}>
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
                paddingBottom={{ xs: "0%", sm: "0%" }}
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
              </Box>
              <Stack
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={{ xs: "center", sm: "flex-end", md: "flex-end" }}
                height={{ sm: "15%", md: "20%" }}
                marginBottom={"8px"}
              >
                <Box>
                  <Button type="submit" variant="contained">
                    Create Booking
                  </Button>
                </Box>
              </Stack>
            </form>
          </Stack>
        </Stack>
      ) : (
        <ConfirmBookingModal {...bookingData} />
      )}
    </>
  );
};

export default AddBookingForm;

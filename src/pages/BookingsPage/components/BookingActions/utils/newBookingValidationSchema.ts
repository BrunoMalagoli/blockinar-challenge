import * as yup from "yup";
export const newBookingValidationSchema = yup.object({
  first_name: yup
    .string()
    .min(2, "Enter a valid name")
    .max(20, "Name too long")
    .required("Please enter your name"),
  last_name: yup
    .string()
    .min(2, "Enter a valid lastname")
    .max(20, "Name too long")
    .required("Please enter your lastname"),
  check_in_date: yup.date().required("Please indicate a valid check in date"),
  check_out_date: yup
    .date()
    .min(yup.ref("check_in_date"), "Check out date cannot be before check in")
    .required("Please indicate a valid check out date"),
  price_per_night: yup.number(),
  number_of_guests: yup.number(),
});

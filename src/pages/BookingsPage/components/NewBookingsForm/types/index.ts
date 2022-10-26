export type newBookingType = {
  first_name: string;
  last_name: string;
  check_in_date: string | Date;
  check_out_date: string | Date;
  number_of_guests?: number;
  price_per_night?: number;
};

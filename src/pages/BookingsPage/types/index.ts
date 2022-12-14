export type bookingItemType = {
  booking_status: string;
  check_in_date: string;
  check_out_date: string;
  first_name: string;
  last_name: string;
  id: number;
  number_of_guests: number;
  price_per_night: number;
  room_id: number;
  room_category?: string;
};

export type filterValuesType = {
  idFilter: number;
  lastNameFilter: string;
  dateFilter: string;
};

export type updateBooking = {
  check_in_date: string;
  check_out_date: string;
  first_name: string;
  last_name: string;
  number_of_guests: number;
  price_per_night: number;
  arrival_date: string;
  booking_status: string;
  room_id: number | string;
};

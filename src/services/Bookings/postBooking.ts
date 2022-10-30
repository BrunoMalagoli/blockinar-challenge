import { newBookingType } from "../../pages/BookingsPage/components/BookingActions/types/index";
export default async function postBooking(data: newBookingType) {
  const dataAdapted = {
    check_in_date: new Date(data.check_in_date)
      .toISOString()
      .replace(".000Z", ""),
    check_out_date: new Date(data.check_out_date)
      .toISOString()
      .replace(".000Z", ""),
    first_name: data.first_name,
    last_name: data.last_name,
    number_of_guests: data.number_of_guests,
    price_per_night: data.price_per_night,
  };
  try {
    const response = await fetch(
      `${import.meta.env.VITE_URL_ENDPOINT_URL}/bookings/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataAdapted),
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error as any);
  }
}

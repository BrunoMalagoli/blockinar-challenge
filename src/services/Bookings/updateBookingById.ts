import {
  bookingItemType,
  updateBooking,
} from "../../pages/BookingsPage/types/index";

async function adaptData(data: updateBooking) {
  try {
    //Modifying dates before ISOString adds 3 hours
    let checkInDate = new Date(data.check_in_date);
    checkInDate.setHours(checkInDate.getHours() - 3);
    let checkOutDate = new Date(data.check_out_date);
    checkOutDate.setHours(checkOutDate.getHours() - 3);
    const dataAdapted = {
      check_in_date: checkInDate.toISOString().replace(".000Z", ""),
      check_out_date: checkOutDate.toISOString().replace(".000Z", ""),
      first_name: data.first_name,
      last_name: data.last_name,
      number_of_guests: data.number_of_guests,
      price_per_night: data.price_per_night,
      booking_status: data.booking_status,
      room_id: data.room_id == "RoomNotAssigned" ? null : data.room_id,
    };
    return dataAdapted;
  } catch (error) {
    console.log(error);
  }
}

export default async function updateBookingById(
  bookingID: number,
  data: updateBooking
) {
  try {
    const dataAdapted = await adaptData(data);
    const response = await fetch(
      `${import.meta.env.VITE_URL_ENDPOINT_URL}/bookings/update/${bookingID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataAdapted),
      }
    );
    console.log(dataAdapted);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error as any);
  }
}

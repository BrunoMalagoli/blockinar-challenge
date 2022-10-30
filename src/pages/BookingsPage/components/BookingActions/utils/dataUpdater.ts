import updateBookingById from "../../../../../services/Bookings/updateBookingById";
import { updateBooking } from "../../../types";
interface dataUpdaterType extends updateBooking {
  arrival_date: string;
}

export default async function dataUpdater(
  bookingID: number,
  values: dataUpdaterType
) {
  try {
    let response = await updateBookingById(bookingID, values);
    return response.status;
  } catch (error) {
    console.log(error);
    throw new Error(error as any);
  }
}

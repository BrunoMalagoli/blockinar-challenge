import { bookingItemType } from "../../../../BookingsPage/types/index";
export default async function currentMonthBookings(
  bookings: bookingItemType[]
) {
  let bookingsByMonth = bookings.filter((booking) => {
    let checkInMonth = new Date(booking.check_in_date);
    checkInMonth.setHours(checkInMonth.getHours() - 3);
    let currentMonth = new Date().toISOString().slice(0, 7);
    return checkInMonth.toISOString().slice(0, 7) === currentMonth;
  });
  return bookingsByMonth;
}

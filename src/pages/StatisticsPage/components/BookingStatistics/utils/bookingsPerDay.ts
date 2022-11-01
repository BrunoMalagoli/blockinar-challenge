import { bookingItemType } from "../../../../BookingsPage/types/index";
export default async function bookingsPerDay(monthBookings: bookingItemType[]) {
  let bookingDays = monthBookings.map((booking) => {
    let bookingDay = new Date(booking.check_in_date).getDate();
    return bookingDay;
  });
  //Quantity of bookings per days that recieved bookings
  let bookingsPerDay = bookingDays.reduce(function (
    previousValue: any,
    currentValue
  ) {
    previousValue[currentValue] = (previousValue[currentValue] || 0) + 1;
    return previousValue;
  },
  {});

  //Quantity of confirmed bookings per day
  let confirmedBookings = monthBookings.filter((booking) => {
    return booking.booking_status === "confirmed";
  });
  function filterConfirmedBookingsByDay(day: number) {
    let filtered = confirmedBookings.filter((booking) => {
      let bookingDay = new Date(booking.check_in_date).getDate();
      return bookingDay === day;
    });
    return filtered;
  }
  //Object adapted to the graph
  let arrayOfBookingsQuantity: [] = [];
  Object.keys(bookingsPerDay).map((key) => {
    let object = {
      bookingDay: `${key}`,
      numberOfBookings: `${bookingsPerDay[`${key}`]}`,
      confirmedBookings: `${
        filterConfirmedBookingsByDay(parseInt(key)).length
      }`,
    };
    arrayOfBookingsQuantity.push(object as never);
  });
  console.log(arrayOfBookingsQuantity);

  return arrayOfBookingsQuantity;
}

import NavBar from "../../components/NavBar";
import BookingsTable from "./components/BookingsTable";
import { useEffect, useContext } from "react";
import getBookings from "../../services/Bookings";
import DataContext from "../../contexts/DataContext/DataContext";
import BookingFilters from "./components/BookingFilters";
import BookingActions from "./components/BookingActions";

const BookingsPage = () => {
  const { setAllBookingsData } = useContext(DataContext);
  useEffect(() => {
    getBookings().then((bookings) => {
      setAllBookingsData(bookings);
    });
  }, []);
  return (
    <>
      <NavBar />
      <BookingActions />
      <BookingFilters />
      <BookingsTable />
    </>
  );
};

export default BookingsPage;

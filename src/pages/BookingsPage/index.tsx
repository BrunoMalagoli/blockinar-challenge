import NavBar from "../../components/NavBar";
import BookingsTable from "./components/BookingsTable";
import { useEffect, useContext } from "react";
import getBookings from "../../services/Bookings";
import DataContext from "../../contexts/DataContext/DataContext";

const BookingsPage = () => {
  const { setAllBookingsData } = useContext(DataContext);
  useEffect(() => {
    getBookings().then((bookings) => {
      setAllBookingsData(bookings);
      console.log(bookings);
    });
  }, []);
  return (
    <>
      <NavBar />
      <BookingsTable />
    </>
  );
};

export default BookingsPage;

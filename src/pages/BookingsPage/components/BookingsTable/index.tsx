import { useContext } from "react";
import DataContext from "../../../../contexts/DataContext/DataContext";
const BookingsTable = () => {
  const { allBookingsData } = useContext(DataContext);
  return <>{allBookingsData ? <></> : null}</>;
};

export default BookingsTable;

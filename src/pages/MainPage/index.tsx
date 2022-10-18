import { useContext, useEffect } from "react";
import NavBar from "../../components/NavBar";
import getRooms from "../../services/Rooms";
import DataTable from "./components/DataTable";
import DataContext from "../../contexts/DataContext/DataContext";
const MainPage = () => {
  //Setting rooms data on MainPage mount
  const { setAllRoomsData } = useContext(DataContext);
  useEffect(() => {
    getRooms().then((roomData) => {
      setAllRoomsData(roomData);
    });
  }, []);
  return (
    <>
      <NavBar />
      <DataTable />
    </>
  );
};

export default MainPage;

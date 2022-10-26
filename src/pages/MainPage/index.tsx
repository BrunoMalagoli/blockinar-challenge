import { useContext, useEffect } from "react";
import NavBar from "../../components/NavBar";
import getRooms from "../../services/Rooms";
import RoomDataTable from "./components/RoomDataTable";
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
      <RoomDataTable />
    </>
  );
};

export default MainPage;

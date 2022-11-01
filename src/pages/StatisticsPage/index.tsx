import { useContext, useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import StatisticsContext from "../../contexts/StatisticsContext/StatisticsContex";
import BookingStatistics from "./components/BookingStatistics";
import RoomStatistics from "./components/RoomStatistics";
import SelectStatsSection from "./components/SelectStatsSection";

const StatisticsPage = () => {
  const { selectStatistic } = useContext(StatisticsContext);
  const [selectedOption, setSelectedOption] = useState();
  useEffect(() => {
    setSelectedOption(selectStatistic);
  }, [selectStatistic]);
  return (
    <>
      <NavBar />
      <SelectStatsSection />
      {selectedOption === "bookings" ? (
        <BookingStatistics />
      ) : selectedOption === "rooms" ? (
        <RoomStatistics />
      ) : null}
    </>
  );
};

export default StatisticsPage;

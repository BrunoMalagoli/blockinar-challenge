import NavBar from "../../components/NavBar";
import BookingStatistics from "./components/BookingStatistics";
import SelectStatsSection from "./components/SelectStatsSection";

const StatisticsPage = () => {
  return (
    <>
      <NavBar />
      <SelectStatsSection />
      <BookingStatistics />
    </>
  );
};

export default StatisticsPage;

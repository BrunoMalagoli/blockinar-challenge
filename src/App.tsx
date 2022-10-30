import "./App.css";
import DataContextProvider from "./contexts/DataContext/DataContextProvider";
import { lazy, Suspense } from "react";
import { Stack, CircularProgress } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import FilterContextProvider from "./contexts/FilterContext/FilterContextProvider";
import TableOptContextProvider from "./contexts/TableOptContext/TableOptContextProvider";
import StatisticsContextProvider from "./contexts/StatisticsContext/StatisticsContextProvider";
const MainPage = lazy(() => import("./pages/MainPage"));
const BookingsPage = lazy(() => import("./pages/BookingsPage"));
const StatisticsPage = lazy(() => import("./pages/StatisticsPage/index"));
function App() {
  const location = useLocation();
  return (
    <>
      <DataContextProvider>
        <FilterContextProvider>
          <TableOptContextProvider>
            <StatisticsContextProvider>
              <Suspense
                fallback={
                  <Stack
                    width={"100%"}
                    height={"100vh"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <CircularProgress />
                  </Stack>
                }
              >
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/bookings" element={<BookingsPage />} />
                  <Route path="statistics" element={<StatisticsPage />} />
                </Routes>
              </Suspense>
            </StatisticsContextProvider>
          </TableOptContextProvider>
        </FilterContextProvider>
      </DataContextProvider>
    </>
  );
}

export default App;

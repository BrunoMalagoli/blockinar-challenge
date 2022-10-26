import "./App.css";
import DataContextProvider from "./contexts/DataContext/DataContextProvider";
import { lazy, Suspense } from "react";
import { Stack, CircularProgress } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import FilterContextProvider from "./contexts/FilterContext/FilterContextProvider";
import TableOptContextProvider from "./contexts/TableOptContext/TableOptContextProvider";
const MainPage = lazy(() => import("./pages/MainPage"));
const BookingsPage = lazy(() => import("./pages/BookingsPage"));
function App() {
  const location = useLocation();
  return (
    <>
      <DataContextProvider>
        <FilterContextProvider>
          <TableOptContextProvider>
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
              </Routes>
            </Suspense>
          </TableOptContextProvider>
        </FilterContextProvider>
      </DataContextProvider>
    </>
  );
}

export default App;

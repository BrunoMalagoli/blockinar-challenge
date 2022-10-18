import "./App.css";
import DataContextProvider from "./contexts/DataContext/DataContextProvider";
import { lazy, Suspense } from "react";
import { Stack, CircularProgress } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import BookingsPage from "./pages/BookingsPage";
const MainPage = lazy(() => import("./pages/MainPage"));
function App() {
  const location = useLocation();
  return (
    <>
      <DataContextProvider>
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
      </DataContextProvider>
    </>
  );
}

export default App;

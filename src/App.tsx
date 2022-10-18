import "./App.css";
import DataContextProvider from "./contexts/DataContext/DataContextProvider";
import { lazy, Suspense } from "react";
import { Stack, CircularProgress } from "@mui/material";
const MainPage = lazy(() => import("./pages/MainPage"));
function App() {
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
          <MainPage />
        </Suspense>
      </DataContextProvider>
    </>
  );
}

export default App;

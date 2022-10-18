import "./App.css";
import DataContextProvider from "./contexts/DataContext/DataContextProvider";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <DataContextProvider>
        <MainPage />
      </DataContextProvider>
    </>
  );
}

export default App;

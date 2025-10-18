import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { MainPage } from "./Components/Main-page";
import { Footer } from "./Components/Footer/Footer";
import { ApartPage } from "./Components/Pages/Apart-page/ApartPage";
import { Box } from "@mui/material";
import { BuildingPage } from "./Components/Pages/Building-page/BuildingPage";
import { AmenitiesPage } from "./Components/Pages/Amenities-page/AmenitiesPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/apart"
          element={
            <Box
              sx={{
                overflowY: "auto",
              }}
            >
              <ApartPage />
            </Box>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/building"
          element={
            <Box
              sx={{
                overflowY: "auto",
              }}
            >
              <BuildingPage />
            </Box>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/amenities"
          element={
            <Box
              sx={{
                overflowY: "auto",
              }}
            >
              <AmenitiesPage />
            </Box>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

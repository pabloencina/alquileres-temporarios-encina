import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { MainPage } from "./Components/Main-page";
import { Footer } from "./Components/Footer/Footer";
import { Box, Typography } from "@mui/material";
import { ApartPage } from "./Components/Pages/Apart-page/ApartPage";
import { BuildingPage } from "./Components/Pages/Building-page/BuildingPage";
import { AmenitiesPage } from "./Components/Pages/Amenities-page/AmenitiesPage";
import { CityVisitsPage } from "./Components/Pages/City-visits-page/CityVisitsPage";
import { WhereToEatPage } from "./Components/Pages/Where-to-eat-page/WhereToEatPage";
import { DepartmentsLayout } from "./Components/Pages/Departments-page/DepartmentsLayout";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          
          {/* Rutas anidadadas para departamentos */}
          <Route path="/departments" element={<DepartmentsLayout />}>
            <Route path="studio-lino" element={
              <Box sx={{ overflowY: "auto" }}>
                <Typography variant="h5" gutterBottom>
                  Studio Lino
                </Typography>
                <Typography variant="body1">
                  Información sobre Studio Lino
                </Typography>
              </Box>
            } />
            <Route path="studio-lino/apart" element={
              <Box sx={{ overflowY: "auto" }}>
                <ApartPage />
              </Box>
            } />
            <Route path="studio-lino/building" element={
              <Box sx={{ overflowY: "auto" }}>
                <BuildingPage />
              </Box>
            } />
            <Route path="studio-lino/amenities" element={
              <Box sx={{ overflowY: "auto" }}>
                <AmenitiesPage />
              </Box>
            } />
          </Route>

          {/* Rutas independientes */}
          <Route
            path="/city-visits"
            element={
              <Box sx={{ overflowY: "auto" }}>
                <CityVisitsPage />
              </Box>
            }
          />
          <Route
            path="/where-to-eat"
            element={
              <Box sx={{ overflowY: "auto" }}>
                <WhereToEatPage />
              </Box>
            }
          />

          {/* Rutas legacy para compatibilidad */}
          <Route
            path="/apart"
            element={
              <Box sx={{ overflowY: "auto" }}>
                <ApartPage />
              </Box>
            }
          />
          <Route
            path="/building"
            element={
              <Box sx={{ overflowY: "auto" }}>
                <BuildingPage />
              </Box>
            }
          />
          <Route
            path="/amenities"
            element={
              <Box sx={{ overflowY: "auto" }}>
                <AmenitiesPage />
              </Box>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

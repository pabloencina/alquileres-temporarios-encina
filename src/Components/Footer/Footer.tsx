import { Box, Typography } from "@mui/material";
import daytimeModeLogo from "../Assets/daytime-mode-logo.svg";
import nighttimeModeLogo from "../Assets/nighttime-mode-logo.svg";
import { FooterStyles } from "./Footer.Styles";
import { useTheme } from "../../contexts/ThemeContext";

export const Footer = () => {
  const { isDarkMode } = useTheme();

  // Obtener colores dinámicos según el tema (iguales al Navbar)
  const getDynamicStyles = () => ({
    backgroundColor: isDarkMode ? "#447D9B" : "#FAEDCA", // primaryNightTime / primaryDayTime
    textColor: isDarkMode ? "#F6F6F6" : "#273F47", // buttons.secondary / text.secondary
  });

  const dynamicStyles = getDynamicStyles();

  return (
    <Box sx={{ ...FooterStyles.container, backgroundColor: dynamicStyles.backgroundColor }}>
      <Box>
        <Typography sx={{ ...FooterStyles.title, color: dynamicStyles.textColor }}>
          Alquileres Temporarios Encina
        </Typography>
        <Typography sx={{ ...FooterStyles.title, color: dynamicStyles.textColor }}>
          alquileres.encina@gmail.com
        </Typography>
      </Box>
      <Box>
        <img 
          style={FooterStyles.logo} 
          src={isDarkMode ? nighttimeModeLogo : daytimeModeLogo} 
          alt="logo" 
        />
      </Box>
    </Box>
  );
};

import { Box, Typography } from "@mui/material";
import daytimeModeLogo from "../Assets/daytime-mode-logo.svg";
import { FooterStyles } from "./Footer.Styles";

export const Footer = () => {
  return (
    <Box sx={FooterStyles.container}>
      <Box>
        <Typography sx={FooterStyles.title}>
          Alquileres Temporarios Encina
        </Typography>
        <Typography sx={FooterStyles.title}>
          alquileres.encina@gmail.com
        </Typography>
      </Box>
      <Box>
        <img style={FooterStyles.logo} src={daytimeModeLogo} alt="logo" />
      </Box>
    </Box>
  );
};

import { Box, Button, Typography } from "@mui/material";
import { ReservationsStyles } from "./Reservations.Styles";
import phoneIcon from "../Assets/WhatsApp.svg.webp";

export const Reservations = () => {
  return (
    <Box sx={ReservationsStyles.container}>
      <Box>
        <Typography sx={ReservationsStyles.title}>
          Reservá tu estadía{" "}
        </Typography>
      </Box>
      <Box sx={ReservationsStyles.descriptionContainer}>
        <Typography sx={ReservationsStyles.description}>
          Contactate con nosotros y te asesoramos:{" "}
          <strong>Disponibilidad</strong>, <strong>Precios</strong>,{" "}
          <strong>Check-in</strong> y <strong>Check-out</strong> y todo lo que
          necesites saber para que tus días en Córdoba sean perfectos.
        </Typography>
      </Box>

      <Box sx={ReservationsStyles.buttonContainer}>
        <Box></Box>
        <Button sx={ReservationsStyles.button}>
          <img
            style={ReservationsStyles.phoneIcon}
            src={phoneIcon}
            alt="whatsapp"
          />{" "}
          Contactar
        </Button>
      </Box>
    </Box>
  );
};

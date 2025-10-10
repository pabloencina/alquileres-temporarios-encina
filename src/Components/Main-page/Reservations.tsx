import { Box, Button, Typography } from "@mui/material";
import { ReservationsStyles } from "./Reservations.Styles";
import phoneIcon from "../Assets/WhatsApp.svg.webp";
import { useTranslation } from "react-i18next";

export const Reservations = () => {
  const { t } = useTranslation();

  return (
    <Box sx={ReservationsStyles.container}>
      <Box>
        <Typography sx={ReservationsStyles.title}>
          {t("reservations.title")}
        </Typography>
      </Box>
      <Box sx={ReservationsStyles.descriptionContainer}>
        <Typography sx={ReservationsStyles.description}>
          {t("reservations.description")}
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
          {t("reservations.button")}
        </Button>
      </Box>
    </Box>
  );
};

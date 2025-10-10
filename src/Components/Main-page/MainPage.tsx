import { Box, Typography } from "@mui/material";
import mainPageImage from "../Assets/image-main-page.jpeg";
import { MainPageStyles } from "./MainPage.Styles";
import { Card } from "./Card";
import { spacing } from "../../styles/theme";
import { t } from "i18next";
import { Information } from "./Information";
import { Reservations } from "./Reservations";

export const MainPage = () => {
  return (
    <Box sx={{ overflowY: "scroll" }}>
      <Box sx={MainPageStyles.container}>
        <img style={MainPageStyles.image} src={mainPageImage} alt="Main Page" />

        <Typography sx={MainPageStyles.title}>{t("mainPage.title")}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          marginTop: spacing.md,
          gap: spacing.md,
        }}
      >
        <Card />
        <Reservations />
        <Information />
      </Box>
    </Box>
  );
};

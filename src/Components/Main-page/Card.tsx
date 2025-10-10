import { Box, Button, Typography } from "@mui/material";
import { CardStyles } from "./Card.Styles";
import apartmentEstudioLinoImage from "../Assets/apart.jpeg";
import { t } from "i18next";
import { spacing, typography } from "../../styles/theme";

export const Card = () => {
  return (
    <Box sx={CardStyles.container}>
      <Box sx={CardStyles.imageContainer}>
        <img
          style={CardStyles.image}
          src={apartmentEstudioLinoImage}
          alt="Apart"
        />
      </Box>
      <Box>
        <Typography sx={CardStyles.title}>
          {t("mainPage.card.title")}
        </Typography>
      </Box>
      <Box
        style={{ display: "flex", flexDirection: "column", gap: spacing.sm }}
      >
        <Typography
          sx={CardStyles.description}
          style={{ fontWeight: typography.fontWeights.semibold }}
        >
          Equipado hasta 3 personas
        </Typography>
        <Typography sx={CardStyles.description}>
          {t("mainPage.card.description")}
        </Typography>
      </Box>
      <Button>
        <Typography sx={CardStyles.button}>
          {t("mainPage.card.button")}
        </Typography>
      </Button>
    </Box>
  );
};

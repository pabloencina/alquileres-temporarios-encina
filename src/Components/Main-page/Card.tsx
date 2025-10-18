import { Box, Button, Typography } from "@mui/material";
import { CardStyles } from "./Card.Styles";
import apartmentStudioLinoImage from "../Assets/apart.jpeg";

import { useTranslation } from "react-i18next";
import { spacing, typography } from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import { IconsCard } from "./IconsCard";

export const Card = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleApartClick = () => {
    navigate("/apart");
  };

  return (
    <Box sx={CardStyles.container}>
      <Box sx={CardStyles.imageContainer}>
        <Box
          component="img"
          sx={CardStyles.image}
          src={apartmentStudioLinoImage}
          alt="Apart"
        />
        <IconsCard />
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
          {t("mainPage.card.capacity")}
        </Typography>
        <Typography sx={CardStyles.description}>
          {t("mainPage.card.description")}
        </Typography>
      </Box>
      <Button onClick={handleApartClick}>
        <Typography sx={CardStyles.button}>
          {t("mainPage.card.button")}
        </Typography>
      </Button>
    </Box>
  );
};

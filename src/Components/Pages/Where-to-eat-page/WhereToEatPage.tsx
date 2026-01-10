import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const WhereToEatPage = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {t("pages.whereToEat.title", "Where to Eat")}
      </Typography>
      <Typography variant="body1">
        {t("pages.whereToEat.description", "Discover the best restaurants and dining options")}
      </Typography>
    </Box>
  );
};

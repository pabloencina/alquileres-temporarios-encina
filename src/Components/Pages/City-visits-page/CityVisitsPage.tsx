import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const CityVisitsPage = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {t("pages.cityVisits.title", "City Visits")}
      </Typography>
      <Typography variant="body1">
        {t("pages.cityVisits.description", "Explore the best places to visit in the city")}
      </Typography>
    </Box>
  );
};

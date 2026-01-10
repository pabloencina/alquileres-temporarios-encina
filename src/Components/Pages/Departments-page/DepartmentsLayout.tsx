import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const DepartmentsLayout = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {t("pages.departments.title", "Departments")}
      </Typography>
      <Outlet />
    </Box>
  );
};

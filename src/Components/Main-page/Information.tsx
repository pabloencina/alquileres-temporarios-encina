import { Box, Typography } from "@mui/material";
import { InformationStyles } from "./Information.Styles";
import { spacing } from "../../styles";
import phoneIcon from "../Assets/WhatsApp.svg.webp";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import { useTranslation } from "react-i18next";

export const Information = () => {
  const { t } = useTranslation();

  return (
    <Box sx={InformationStyles.container}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: spacing.md }}>
        <Typography sx={InformationStyles.title}>
          {t("information.schedule.title")}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: spacing.xs }}>
          <Typography sx={InformationStyles.description}>
            {t("information.schedule.weekdays")}
          </Typography>

          <Typography sx={InformationStyles.description}>
            {t("information.schedule.saturday")}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: spacing.xs }}>
        <Typography sx={InformationStyles.title}>
          {t("information.contact.title")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingX: spacing.md,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            src={phoneIcon}
            alt="phone"
            style={InformationStyles.phoneIcon}
          />
          <Typography sx={InformationStyles.description}>
            {t("information.contact.phone")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingX: spacing.md,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <MarkEmailUnreadOutlinedIcon style={InformationStyles.emailIcon} />
          <Typography sx={InformationStyles.description}>
            {t("information.contact.email")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

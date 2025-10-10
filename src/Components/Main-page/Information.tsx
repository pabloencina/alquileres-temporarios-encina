import { Box, Typography } from "@mui/material";
import { InformationStyles } from "./Information.Styles";
import { spacing } from "../../styles";
import phoneIcon from "../Assets/WhatsApp.svg.webp";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";

export const Information = () => {
  return (
    <Box sx={InformationStyles.container}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: spacing.md }}>
        <Typography sx={InformationStyles.title}>
          Horarios de atención
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: spacing.xs }}>
          <Typography sx={InformationStyles.description}>
            Lunes a viernes: 8:00 a 19:00 hs
          </Typography>

          <Typography sx={InformationStyles.description}>
            Sábados: 9:00 a 13:00 hs
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: spacing.xs }}>
        <Typography sx={InformationStyles.title}>Contactanos</Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingX: spacing.md,
            alignItems: "center",
          }}
        >
          <img
            src={phoneIcon}
            alt="phone"
            style={InformationStyles.phoneIcon}
          />
          <Typography sx={InformationStyles.description}>
            299-4231917
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingX: spacing.md,
            alignItems: "center",
          }}
        >
          <MarkEmailUnreadOutlinedIcon style={InformationStyles.emailIcon} />
          <Typography sx={InformationStyles.description}>
            alquileres.encina@gmail.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

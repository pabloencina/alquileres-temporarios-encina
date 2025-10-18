import { Box, Tooltip } from "@mui/material";
import { CardStyles } from "./Card.Styles";
import swimmingPoolIcon from "../Assets/Icons/swimming-pool.png";
import coworkingIcon from "../Assets/Icons/coworking.png";
import smartLockIcon from "../Assets/Icons/smart-lock.png";
import gymIcon from "../Assets/Icons/gym.png";
import securityIcon from "../Assets/Icons/security.png";

export const IconsCard = () => {
  return (
    <Box sx={CardStyles.iconsContainer}>
      <Tooltip title="Seguridad 24hs" arrow placement="top">
        <Box>
          <img style={CardStyles.icon} src={securityIcon} alt="Security" />
        </Box>
      </Tooltip>

      <Tooltip title="Cerradura inteligente" arrow placement="top">
        <Box>
          <img style={CardStyles.icon} src={smartLockIcon} alt="Smart Lock" />
        </Box>
      </Tooltip>

      <Tooltip title="Gimnasio" arrow placement="top">
        <Box>
          <img style={CardStyles.icon} src={gymIcon} alt="Gym" />
        </Box>
      </Tooltip>

      <Tooltip title="Piscina" arrow placement="top">
        <Box>
          <img
            style={CardStyles.icon}
            src={swimmingPoolIcon}
            alt="Swimming Pool"
          />
        </Box>
      </Tooltip>

      <Tooltip title="Espacio coworking" arrow placement="top">
        <Box>
          <img style={CardStyles.icon} src={coworkingIcon} alt="Coworking" />
        </Box>
      </Tooltip>
    </Box>
  );
};

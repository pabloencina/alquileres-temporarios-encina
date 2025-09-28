import { Box, Button, Typography } from "@mui/material";
import { NavbarStyles } from "./Navbar.Styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import daytimeModeLogo from "../Assets/daytime-mode-logo.svg";
import { spacing } from "../../styles";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { NavigationMenu } from "./NavigationMenu";

export const Navbar = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    //console.log("Menu clicked, current state:", isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={NavbarStyles.container}>
        <Box>
          <Button>
            <img style={NavbarStyles.logo} src={daytimeModeLogo} alt="logo" />
          </Button>
          <Box sx={{ marginLeft: spacing.sm }}>
            <Typography sx={NavbarStyles.title}>{t("navbar.title")}</Typography>
          </Box>
        </Box>
        <Box sx={NavbarStyles.containerButton}>
          <Button>
            <LanguageOutlinedIcon sx={NavbarStyles.menuIcon} />
          </Button>
        </Box>
        <Box sx={NavbarStyles.containerButton}>
          <Button>
            <ToggleOffOutlinedIcon sx={NavbarStyles.menuIcon} />
          </Button>
        </Box>
        <Box sx={NavbarStyles.containerButton}>
          <Button sx={NavbarStyles.button} onClick={handleMenuClick}>
            {isMenuOpen ? (
              <CloseOutlinedIcon sx={NavbarStyles.closeIcon} />
            ) : (
              <MenuIcon sx={NavbarStyles.menuIcon} />
            )}
          </Button>
        </Box>
      </Box>

      {isMenuOpen && <NavigationMenu />}
    </Box>
  );
};

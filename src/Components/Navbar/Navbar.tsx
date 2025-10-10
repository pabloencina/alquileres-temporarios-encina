import {
  Box,
  Button,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
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
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const languageMenuOpen = Boolean(languageAnchorEl);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    handleLanguageClose();
  };

  return (
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
        <Button
          id="language-button"
          aria-controls={languageMenuOpen ? "language-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={languageMenuOpen ? "true" : undefined}
          onClick={handleLanguageClick}
          sx={NavbarStyles.button}
        >
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
      <NavigationMenu isOpen={isMenuOpen} />

      <Menu
        id="language-menu"
        anchorEl={languageAnchorEl}
        open={languageMenuOpen}
        onClose={handleLanguageClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={() => handleLanguageChange("es")}>
          <ListItemIcon>
            <Typography sx={{ fontSize: "18px" }}>🇪🇸</Typography>
          </ListItemIcon>
          <ListItemText>Español</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange("en")}>
          <ListItemIcon>
            <Typography sx={{ fontSize: "18px" }}>🇺🇸</Typography>
          </ListItemIcon>
          <ListItemText>English</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

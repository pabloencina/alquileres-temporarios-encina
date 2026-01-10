import { Box, Button, Typography, Link } from "@mui/material";
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

import { NavigationMenuStyles } from "./NavigationMenu.Styles";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { t } from "i18next";

interface NavigationMenuProps {
  isOpen: boolean;
}

export const NavigationMenu = ({ isOpen }: NavigationMenuProps) => {
  const { isDarkMode } = useTheme();
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [studioLinoOpen, setStudioLinoOpen] = useState(false);
  const [photoGalleryOpen, setPhotoGalleryOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Obtener colores dinámicos según el tema
  const getDynamicStyles = () => ({
    backgroundColor: isDarkMode ? "#447D9B" : "#FAEDCA", // primaryNightTime / primaryDayTime
    textColor: isDarkMode ? "#F6F6F6" : "#273F47", // buttons.secondary / text.secondary
  });

  const dynamicStyles = getDynamicStyles();

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Pequeño delay para que el componente se renderice primero en su estado inicial
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 20);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setShouldRender(false), 1000); // 800ms para que coincida con la duración de la animación
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleDepartmentsClick = () => {
    setDepartmentsOpen(!departmentsOpen);
  };

  const handleStudioLinoClick = () => {
    setStudioLinoOpen(!studioLinoOpen);
  };

  const handlePhotoGalleryClick = () => {
    setPhotoGalleryOpen(!photoGalleryOpen);
  };

  if (!shouldRender) return null;

  return (
    <Box
      sx={{
        ...NavigationMenuStyles.container,
        backgroundColor: dynamicStyles.backgroundColor,
        ...(isAnimating && {
          "&.open": NavigationMenuStyles.container["&.open"],
        }),
      }}
      className={isAnimating ? "open" : ""}
    >
      <Link component={RouterLink} to="/" sx={{ textDecoration: "none", color: "inherit" }}>
        <Typography sx={{ ...NavigationMenuStyles.title, color: dynamicStyles.textColor }}>
          {t("navbar.navigation.home")}
        </Typography>
      </Link>

      <Button
        id="departments-button"
        onClick={handleDepartmentsClick}
        sx={NavigationMenuStyles.button}
      >
        <Typography sx={{ ...NavigationMenuStyles.title, color: dynamicStyles.textColor }}>
          {t("navbar.navigation.departments")}
        </Typography>
        {departmentsOpen ? (
          <KeyboardArrowUpOutlinedIcon sx={NavigationMenuStyles.iconUp} />
        ) : (
          <KeyboardArrowDownOutlinedIcon sx={NavigationMenuStyles.iconDown} />
        )}
      </Button>

      {departmentsOpen && (
        <Box sx={NavigationMenuStyles.box}>
          <Button
            id="studio-lino-button"
            onClick={handleStudioLinoClick}
            sx={NavigationMenuStyles.button}
          >
            <Typography sx={{ ...NavigationMenuStyles.title, color: dynamicStyles.textColor }}>
              {t("navbar.navigation.studioLino")}
            </Typography>
            {studioLinoOpen ? (
              <KeyboardArrowUpOutlinedIcon sx={NavigationMenuStyles.iconUp} />
            ) : (
              <KeyboardArrowDownOutlinedIcon
                sx={NavigationMenuStyles.iconDown}
              />
            )}
          </Button>
        </Box>
      )}

      {studioLinoOpen && (
        <Box sx={NavigationMenuStyles.box}>
          <Button
            id="photo-gallery-button"
            onClick={handlePhotoGalleryClick}
            sx={NavigationMenuStyles.button}
          >
            <Typography sx={{ ...NavigationMenuStyles.title, color: dynamicStyles.textColor }}>
              {t("navbar.navigation.photosGallery")}
            </Typography>
            {photoGalleryOpen ? (
              <KeyboardArrowUpOutlinedIcon sx={NavigationMenuStyles.iconUp} />
            ) : (
              <KeyboardArrowDownOutlinedIcon
                sx={NavigationMenuStyles.iconDown}
              />
            )}
          </Button>
        </Box>
      )}

      {photoGalleryOpen && (
        <Box sx={{ ...NavigationMenuStyles.box, marginLeft: 3, gap: 1 }}>
          <Link component={RouterLink} to="/apart" sx={{ textDecoration: "none", color: "inherit" }}>
            <Typography sx={{ ...NavigationMenuStyles.title, color: dynamicStyles.textColor }}>
              {t("navbar.navigation.apart")}
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/building"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography sx={{ ...NavigationMenuStyles.title, color: dynamicStyles.textColor }}>
              {t("navbar.navigation.building")}
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/amenities"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography sx={{ ...NavigationMenuStyles.title, color: dynamicStyles.textColor }}>
              {t("navbar.navigation.amenities")}
            </Typography>
          </Link>
        </Box>
      )}

      <Link component={RouterLink} to="/city-visits" sx={{ textDecoration: "none", color: "inherit" }}>
        <Typography sx={{ ...NavigationMenuStyles.title, color: dynamicStyles.textColor }}>
          {" "}
          {t("navbar.navigation.cityVisits")}
        </Typography>
      </Link>

      <Link component={RouterLink} to="/where-to-eat" sx={{ textDecoration: "none", color: "inherit" }}>
        <Typography sx={{ ...NavigationMenuStyles.title, color: dynamicStyles.textColor }}>
          {t("navbar.navigation.whereToEat")}
        </Typography>
      </Link>
    </Box>
  );
};

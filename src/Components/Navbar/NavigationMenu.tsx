import { Box, Button, Link, Typography } from "@mui/material";
import { useState, useEffect } from "react";

import { NavigationMenuStyles } from "./NavigationMenu.Styles";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { t } from "i18next";

interface NavigationMenuProps {
  isOpen: boolean;
}

export const NavigationMenu = ({ isOpen }: NavigationMenuProps) => {
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [studioLinoOpen, setStudioLinoOpen] = useState(false);
  const [photoGalleryOpen, setPhotoGalleryOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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
        ...(isAnimating && {
          "&.open": NavigationMenuStyles.container["&.open"],
        }),
      }}
      className={isAnimating ? "open" : ""}
    >
      <Link href="/" sx={{ textDecoration: "none", color: "inherit" }}>
        <Typography sx={NavigationMenuStyles.title}>
          {t("navbar.navigation.home")}
        </Typography>
      </Link>

      <Button
        id="departments-button"
        onClick={handleDepartmentsClick}
        sx={NavigationMenuStyles.button}
      >
        <Typography sx={NavigationMenuStyles.title}>
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
            <Typography sx={NavigationMenuStyles.title}>
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
            <Typography sx={NavigationMenuStyles.title}>
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
          <Link href="/apart" sx={{ textDecoration: "none", color: "inherit" }}>
            <Typography sx={NavigationMenuStyles.title}>
              {t("navbar.navigation.apart")}
            </Typography>
          </Link>
          <Link
            href="/edificio"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography sx={NavigationMenuStyles.title}>
              {t("navbar.navigation.edificio")}
            </Typography>
          </Link>
          <Link
            href="/amenities"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography sx={NavigationMenuStyles.title}>
              {t("navbar.navigation.amenities")}
            </Typography>
          </Link>
        </Box>
      )}

      <Link href="/" sx={{ textDecoration: "none", color: "inherit" }}>
        <Typography sx={NavigationMenuStyles.title}>
          {" "}
          {t("navbar.navigation.cityVisits")}
        </Typography>
      </Link>

      <Link href="/" sx={{ textDecoration: "none", color: "inherit" }}>
        <Typography sx={NavigationMenuStyles.title}>
          {t("navbar.navigation.whereToEat")}
        </Typography>
      </Link>
    </Box>
  );
};

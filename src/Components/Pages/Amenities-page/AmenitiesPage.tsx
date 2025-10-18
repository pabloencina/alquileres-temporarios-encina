import { Box, Typography } from "@mui/material";
import { AmenitiesStyles } from "./Amenities.Styles";
import poolAmenities1 from "../../Assets/Amenities/waterpool1.jpeg";
import poolAmenities2 from "../../Assets/Amenities/waterpool2.jpeg";
import gymAmenities1 from "../../Assets/Amenities/gym.jpeg";
import coworkingAmenities from "../../Assets/Amenities/coworking.jpeg";
import pool from "../../Assets/Icons/swimming-pool.png";
import { t } from "i18next";

export const AmenitiesPage = () => {
  return (
    <Box sx={AmenitiesStyles.container}>
      <Box sx={AmenitiesStyles.titleContainer}>
        <Typography sx={AmenitiesStyles.title}>Fotos Amenities</Typography>
      </Box>

      {/* FOTOS 1 DE PISCINA */}
      <Box sx={AmenitiesStyles.imageContainer}>
        <img
          src={poolAmenities1}
          alt="PhotoApart"
          style={AmenitiesStyles.image}
        />
        <img
          src={poolAmenities2}
          alt="PhotoApart"
          style={AmenitiesStyles.image}
        />
      </Box>
      {/*  description Piscina */}
      <Box sx={AmenitiesStyles.descriptionAmenities.container}>
        <Typography sx={AmenitiesStyles.descriptionAmenities.title}>
          {" "}
          {t("amenitiesPage.pool.title")}
          <Box sx={AmenitiesStyles.iconContainer}>
            <img src={pool} alt="PhotoApart" style={AmenitiesStyles.icon} />
          </Box>
        </Typography>
      </Box>

      {/* Fotos Gym */}
      <Box sx={AmenitiesStyles.imageContainer}>
        <img
          src={gymAmenities1}
          alt="PhotoApart"
          style={AmenitiesStyles.image}
        />
      </Box>

      {/*  description Gym */}
      <Box sx={AmenitiesStyles.descriptionAmenities.container}>
        <Typography sx={AmenitiesStyles.descriptionAmenities.title}>
          {" "}
          {t("amenitiesPage.gym.title")}
        </Typography>
        <Box sx={AmenitiesStyles.descriptionAmenities.descriptionContainer}>
          <Typography
            sx={AmenitiesStyles.descriptionAmenities.description}
            dangerouslySetInnerHTML={{
              __html: t("amenitiesPage.gym.description"),
            }}
          />
        </Box>
      </Box>
      {/* Fotos Coworking */}
      <Box sx={AmenitiesStyles.imageContainer}>
        <img
          src={coworkingAmenities}
          alt="PhotoApart"
          style={AmenitiesStyles.image}
        />
      </Box>
      {/*  description Coworking */}
      <Box sx={AmenitiesStyles.descriptionAmenities.container}>
        <Typography sx={AmenitiesStyles.descriptionAmenities.title}>
          {" "}
          {t("amenitiesPage.coworking.title")}
        </Typography>
        <Box sx={AmenitiesStyles.descriptionAmenities.descriptionContainer}>
          <Typography
            sx={AmenitiesStyles.descriptionAmenities.description}
            dangerouslySetInnerHTML={{
              __html: t("amenitiesPage.coworking.description"),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

import { Box, Typography } from "@mui/material";
import { PhotoBuildingStyles } from "./PhotoBuilding.Styles";
import { t } from "i18next";
import buildingApart from "../../Assets/Building/building.jpeg";
import entranceBuilding from "../../Assets/Building/building-entrance.jpeg";
import loby from "../../Assets/Building/loby.jpeg";
import loby2 from "../../Assets/Building/loby2.jpeg";

export const PhotoBuilding = () => {
  return (
    <Box sx={PhotoBuildingStyles.container}>
      <Box sx={PhotoBuildingStyles.titleContainer}>
        <Typography sx={PhotoBuildingStyles.title}>
          Fotos del Edificio
        </Typography>
      </Box>

      {/* FOTOS 1 DEL edificio */}
      <Box sx={PhotoBuildingStyles.imageContainer}>
        <img
          src={buildingApart}
          alt="PhotoApart"
          style={PhotoBuildingStyles.image}
        />
      </Box>

      {/*  description 1 */}
      <Box sx={PhotoBuildingStyles.descriptionApart.container}>
        <Typography sx={PhotoBuildingStyles.descriptionApart.title}>
          {" "}
          {t("buildingPage.title1")}
        </Typography>
        <Box sx={PhotoBuildingStyles.descriptionApart.descriptionContainer}>
          <Typography
            sx={PhotoBuildingStyles.descriptionApart.description}
            dangerouslySetInnerHTML={{ __html: t("buildingPage.description") }}
          />
        </Box>
      </Box>

      {/* FOTOS 2 DEL edificio */}
      <Box sx={PhotoBuildingStyles.imageContainer}>
        <img
          src={entranceBuilding}
          alt="PhotoApart"
          style={PhotoBuildingStyles.image}
        />
      </Box>

      {/*  description 2 */}
      <Box sx={PhotoBuildingStyles.descriptionApart.container}>
        <Typography sx={PhotoBuildingStyles.descriptionApart.title}>
          {" "}
          {t("buildingPage.title2")}
        </Typography>
        <Box sx={PhotoBuildingStyles.descriptionApart.descriptionContainer}>
          <Typography
            sx={PhotoBuildingStyles.descriptionApart.description}
            dangerouslySetInnerHTML={{ __html: t("buildingPage.description2") }}
          />
        </Box>
      </Box>

      {/* FOTOS 3 DEL edificio */}
      <Box sx={PhotoBuildingStyles.imageContainer}>
        <img src={loby} alt="PhotoApart" style={PhotoBuildingStyles.image} />
        <img src={loby2} alt="PhotoApart" style={PhotoBuildingStyles.image} />
      </Box>

      {/*  description 3 */}
      <Box sx={PhotoBuildingStyles.descriptionApart.container}>
        <Typography sx={PhotoBuildingStyles.descriptionApart.title}>
          {" "}
          {t("buildingPage.title3")}
        </Typography>
        <Box sx={PhotoBuildingStyles.descriptionApart.descriptionContainer}>
          <Typography
            sx={PhotoBuildingStyles.descriptionApart.description}
            dangerouslySetInnerHTML={{ __html: t("buildingPage.description3") }}
          />
        </Box>
      </Box>
    </Box>
  );
};

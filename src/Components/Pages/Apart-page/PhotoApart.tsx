import { Box, Typography } from "@mui/material";
import { PhotoApartStyles } from "./PhotoApart.Styles";
import photoApart from "../../Assets/Apart/apart.jpeg";
import kitchenApart from "../../Assets/Apart/kitchen.jpeg";
import bedApart from "../../Assets/Apart/bed.jpeg";
import livingRoomApart from "../../Assets/Apart/apart.jpeg";
import bathroomApart from "../../Assets/Apart/bath1.jpeg";
import bathroomApart2 from "../../Assets/Apart/bath2.jpeg";

import { t } from "i18next";

export const PhotoApart = () => {
  return (
    <Box sx={PhotoApartStyles.container}>
      <Box sx={PhotoApartStyles.titleContainer}>
        <Typography sx={PhotoApartStyles.title}>Fotos Apart</Typography>
      </Box>

      {/* FOTOS 1 DEL APART */}
      <Box sx={PhotoApartStyles.imageContainer}>
        <img src={photoApart} alt="PhotoApart" style={PhotoApartStyles.image} />

        <img
          src={kitchenApart}
          alt="PhotoApart"
          style={PhotoApartStyles.image}
        />
      </Box>

      {/*  description 1 */}
      <Box sx={PhotoApartStyles.descriptionApart.container}>
        <Typography sx={PhotoApartStyles.descriptionApart.title}>
          {" "}
          {t("apartPage.title1")}
        </Typography>
        <Box sx={PhotoApartStyles.descriptionApart.descriptionContainer}>
          <Typography
            sx={PhotoApartStyles.descriptionApart.description}
            dangerouslySetInnerHTML={{ __html: t("apartPage.description") }}
          />
        </Box>
      </Box>

      {/* FOTOS 2 DEL APART */}
      <Box sx={PhotoApartStyles.imageContainer}>
        <img src={bedApart} alt="PhotoApart" style={PhotoApartStyles.image} />

        <img
          src={livingRoomApart}
          alt="PhotoApart"
          style={PhotoApartStyles.image}
        />
      </Box>

      {/*  description 2 */}
      <Box sx={PhotoApartStyles.descriptionApart.container}>
        <Typography sx={PhotoApartStyles.descriptionApart.title}>
          {" "}
          {t("apartPage.title2")}
        </Typography>
        <Box sx={PhotoApartStyles.descriptionApart.descriptionContainer}>
          <Typography
            sx={PhotoApartStyles.descriptionApart.description}
            dangerouslySetInnerHTML={{ __html: t("apartPage.description2") }}
          />
        </Box>
      </Box>

      {/* FOTOS 3 DEL APART */}
      <Box sx={PhotoApartStyles.imageContainer}>
        <img
          src={bathroomApart}
          alt="PhotoApart"
          style={PhotoApartStyles.image}
        />

        <img
          src={bathroomApart2}
          alt="PhotoApart"
          style={PhotoApartStyles.image}
        />
      </Box>

      {/*  description 3 */}
      <Box sx={PhotoApartStyles.descriptionApart.container}>
        <Typography sx={PhotoApartStyles.descriptionApart.title}>
          {" "}
          {t("apartPage.title3")}
        </Typography>
        <Box sx={PhotoApartStyles.descriptionApart.descriptionContainer}>
          <Typography sx={PhotoApartStyles.descriptionApart.description}>
            {t("apartPage.description3")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

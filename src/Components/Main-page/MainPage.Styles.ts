import { colors, fonts, spacing, typography } from "../../styles/theme";

export const MainPageStyles = {
  container: {
    position: "relative",
    width: "100%",
    height: "70vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    overflowY: "scroll",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    filter: "brightness(0.5)",
    objectFit: "cover",
  },

  title: {
    fontFamily: fonts.primary,
    padding: "4rem",
    fontSize: typography.fontSizes.xl,
    position: "absolute" as const,
    zIndex: 2,
    color: colors.buttons.secondary,
    textAlign: "center",
  },
};

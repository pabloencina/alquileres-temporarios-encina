import {
  borderRadius,
  colors,
  fonts,
  spacing,
  typography,
} from "../../../styles";

export const AmenitiesStyles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: spacing.sm,
  },
  titleContainer: {
    width: "100%",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.md,
    backgroundColor: colors.text.primary,
    overflowY: "auto",
  },
  title: {
    fontFamily: fonts.primary,
    fontSize: typography.fontSizes.h1,
    fontWeight: typography.fontWeights.semibold,
    color: colors.text.tertiary,
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.md,
    borderRadius: borderRadius.full,
    backgroundColor: colors.text.secondary,
    padding: spacing.sm,
    width: "40px",
    height: "40px",
  },
  icon: {
    width: "30px",
    height: "30px",
    filter:
      "brightness(0) saturate(100%) invert(93%) sepia(10%) saturate(670%) hue-rotate(327deg) brightness(104%) contrast(94%)",
  },
  imageContainer: {
    gap: spacing.lg,
    marginTop: spacing.md,
  },
  image: {
    width: "100%",
  },

  descriptionAmenities: {
    container: {
      height: "100%",
      paddingX: spacing.md,
      //backgroundColor: colors.primaryDayTime,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      //gap: spacing.md,
    },
    title: {
      fontFamily: fonts.secondary,
      fontSize: typography.fontSizes.xl,
      fontWeight: typography.fontWeights.semibold,
      color: colors.text.primary,
      marginTop: spacing.md,
      textAlign: "center",
    },
    descriptionContainer: {
      marginTop: spacing.md,
    },
    description: {
      fontFamily: fonts.accent,
      fontSize: typography.fontSizes.sm,
      fontWeight: typography.fontWeights.normal,
      color: colors.text.secondary,
    },
  },
};

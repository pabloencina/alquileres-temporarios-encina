import {
  borderRadius,
  colors,
  fonts,
  spacing,
  typography,
} from "../../styles/theme";

export const CardStyles = {
  container: {
    width: { xs: "90%", sm: "50%", md: "50%" },
    gap: spacing.md,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primaryDayTime,
    borderRadius: borderRadius.xl,
    padding: spacing.md,
    border: `1px solid ${colors.gray[500]}`,
  },
  imageContainer: {
    width: "100%",
    height: "10%",
    position: "relative",
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: { xs: "150px", sm: "200px", md: "200px" },
    objectFit: "cover",
  },

  iconsContainer: {
    //width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: spacing.md,
    position: "absolute",
    borderRadius: borderRadius.sm,
    //border: `0.5px solid ${colors.buttons.primary}`,
    backgroundColor: colors.primaryDayTime,
    zIndex: 2,
    padding: spacing.xs,
    top: spacing.sm,
    right: spacing.sm,
  },

  icon: {
    width: "20px",
    height: "20px",
    filter: `brightness(0) saturate(100%) invert(35%) sepia(25%) saturate(1200%) hue-rotate(180deg) brightness(95%) contrast(90%)`,
  },

  title: {
    fontFamily: fonts.secondary,
    fontSize: typography.fontSizes.xl,
    fontWeight: typography.fontWeights.semibold,
    color: colors.text.primary,
  },

  description: {
    fontFamily: fonts.accent,
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.normal,
    color: colors.text.secondary,
    textAlign: "center",
  },

  button: {
    fontFamily: fonts.accent,
    fontSize: typography.fontSizes.sm,
    width: "100%",
    paddingX: spacing.xl,
    paddingY: spacing.sm,
    borderRadius: borderRadius.sm,
    textAlign: "center",
    cursor: "pointer",
    color: colors.buttons.secondary,
    backgroundColor: colors.buttons.primary,
    "&:hover": {
      backgroundColor: colors.buttons.secondary,
      color: colors.buttons.primary,
    },
  },
};

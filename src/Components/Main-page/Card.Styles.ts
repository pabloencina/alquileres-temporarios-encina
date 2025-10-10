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
  },
  image: {
    width: "100%",
    height: { xs: "150px", sm: "200px", md: "200px" },
    objectFit: "cover",
  },

  title: {
    fontFamily: fonts.secondary,
    fontSize: typography.fontSizes.xl,
    fontWeight: typography.fontWeights.semibold,
    color: colors.text.primary,
  },

  description: {
    fontFamily: fonts.accent,
    fontSize: typography.fontSizes.xs,
    fontWeight: typography.fontWeights.normal,
    color: colors.text.secondary,
    textAlign: "center",
  },

  button: {
    fontFamily: fonts.accent,
    fontSize: typography.fontSizes.xs,
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

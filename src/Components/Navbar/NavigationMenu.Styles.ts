import { colors, typography, spacing, fonts } from "../../styles";
export const icon = {
  fontSize: typography.fontSizes.xl,
  fontWeight: typography.fontWeights.semibold,
  color: colors.buttons.primary,
  transition: "transform 0.5s ease",
};
export const NavigationMenuStyles = {
  container: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    gap: 1,
    backgroundColor: colors.primaryDayTime,
    padding: spacing.md,
    alignItems: "flex-start",
    transform: "translateY(-20px) scale(0.95)",
    opacity: 0,
    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
    "&.open": {
      transform: "translateY(0) scale(1)",
      opacity: 1,
    },
  },
  title: {
    fontFamily: fonts.secondary,
    fontSize: typography.fontSizes.xs,
    fontWeight: typography.fontWeights.normal,
    color: colors.text.secondary,
  },
  iconDown: {
    ...icon,
  },
  iconUp: {
    ...icon,
    color: colors.text.primary,
  },
  button: {
    color: "inherit",
    textTransform: "none",
    fontSize: "inherit",
    "&:hover": { backgroundColor: "transparent" },
  },
  box: {
    display: "flex",
    flexDirection: "column",
  },
};

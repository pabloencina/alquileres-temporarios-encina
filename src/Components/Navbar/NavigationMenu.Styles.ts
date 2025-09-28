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
    marginTop: spacing.md,
    alignItems: "flex-start",
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

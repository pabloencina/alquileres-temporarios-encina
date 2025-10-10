import { colors, fonts, spacing, typography } from "../../styles/theme";

export const FooterStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primaryDayTime,
    height: "100px",
    gap: spacing.lg,
    marginTop: spacing.md,
  },

  title: {
    fontFamily: fonts.secondary,
    fontSize: typography.fontSizes.xs,
    fontWeight: typography.fontWeights.medium,
    color: colors.text.secondary,
  },

  logo: {
    width: "50px",
    height: "50px",
  },
};

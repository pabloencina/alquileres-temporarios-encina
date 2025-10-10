import { colors, fonts, spacing, typography } from "../../styles/theme";

export const InformationStyles = {
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.primaryDayTime,
    padding: spacing.md,
    display: "flex",
    flexDirection: "column",
    gap: spacing.md,
  },
  title: {
    fontFamily: fonts.secondary,
    fontSize: typography.fontSizes.xl,
    fontWeight: typography.fontWeights.semibold,
    color: colors.text.primary,
    //paddingX: spacing.md,
    textAlign: "center",
  },
  description: {
    fontFamily: fonts.accent,
    fontSize: typography.fontSizes.xs,
    fontWeight: typography.fontWeights.medium,
    color: colors.text.secondary,
    paddingX: spacing.md,
    alignItems: "center",
  },

  phoneIcon: {
    width: "30px",
    height: "30px",
  },
  emailIcon: {
    width: "25px",
    height: "25px",
    color: colors.buttons.primary,
  },
};

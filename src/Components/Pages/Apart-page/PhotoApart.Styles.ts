import { colors, fonts, spacing, typography } from "../../../styles";

export const PhotoApartStyles = {
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

  imageContainer: {
    gap: spacing.lg,
    marginTop: spacing.md,
  },

  image: {
    width: "100%",
  },

  descriptionApart: {
    container: {
      height: "100%",
      paddingX: spacing.md,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },

    title: {
      fontFamily: fonts.secondary,
      fontSize: typography.fontSizes.xl,
      fontWeight: typography.fontWeights.semibold,
      color: colors.text.primary,
      marginTop: spacing.md,
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

import { fonts, spacing, typography } from "../../styles/theme";

export const FooterStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // El backgroundColor se establecerá dinámicamente en el componente
    height: "100px",
    gap: spacing.lg,
    marginTop: spacing.md,
  },

  title: {
    fontFamily: fonts.secondary,
    fontSize: typography.fontSizes.xs,
    fontWeight: typography.fontWeights.medium,
    // El color se establecerá dinámicamente en el componente
  },

  logo: {
    width: "50px",
    height: "50px",
  },
};

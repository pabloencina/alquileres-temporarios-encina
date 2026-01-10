import { colors, spacing, borderRadius, typography, fonts } from "../../styles";

export const NavbarStyles = {
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // El backgroundColor se establecerá dinámicamente en el componente
    padding: `${spacing.xs} 0`, // Solo padding vertical, sin márgenes horizontales
    margin: 0, // Sin márgenes
    width: "100%", // Ocupar todo el ancho
  },
  containerButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
  },
  menuContainer: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: 1000,
    // El backgroundColor se establecerá dinámicamente en el componente
    borderBottom: `1px solid ${colors.gray[200]}`,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    minHeight: "200px",
    padding: spacing.md,
  },
  button: {
    color: colors.text.primary,
    border: "none",
    cursor: "pointer",
    padding: spacing.sm,
  },
  menuIcon: {
    color: colors.text.primary,
    fontSize: "24px",
  },
  closeIcon: {
    color: colors.buttons.primary,
    fontSize: "24px",
  },
  logo: {
    width: "50px",
    height: "50px",
    borderRadius: borderRadius.sm,
  },
  title: {
    fontFamily: fonts.primary,
    color: colors.text.primary,
    fontSize: typography.fontSizes.xs,
    fontWeight: typography.fontWeights.light,
  },
};

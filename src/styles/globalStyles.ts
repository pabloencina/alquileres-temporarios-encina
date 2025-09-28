import { theme } from "./theme";

// Estilos globales reutilizables
export const globalStyles = {
  // Contenedores
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: `0 ${theme.spacing.md}`,
  },

  // Flexbox utilities
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  flexBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  flexColumn: {
    display: "flex",
    flexDirection: "column" as const,
  },

  // Botones
  button: {
    primary: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,
      padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
      borderRadius: theme.borderRadius.md,
      border: "none",
      cursor: "pointer",
      fontSize: theme.typography.fontSizes.md,
      fontWeight: theme.typography.fontWeights.medium,
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: theme.colors.gray[700],
        transform: "translateY(-2px)",
        boxShadow: theme.shadows.md,
      },
    },

    secondary: {
      backgroundColor: "transparent",
      color: theme.colors.primary,
      padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
      borderRadius: theme.borderRadius.md,
      border: `2px solid ${theme.colors.primary}`,
      cursor: "pointer",
      fontSize: theme.typography.fontSizes.md,
      fontWeight: theme.typography.fontWeights.medium,
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: theme.colors.primary,
        color: theme.colors.white,
        transform: "translateY(-2px)",
        boxShadow: theme.shadows.md,
      },
    },
  },

  // Cards
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    boxShadow: theme.shadows.sm,
    border: `1px solid ${theme.colors.gray[200]}`,
  },

  // Inputs
  input: {
    width: "100%",
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    border: `1px solid ${theme.colors.gray[300]}`,
    borderRadius: theme.borderRadius.md,
    fontSize: theme.typography.fontSizes.md,
    transition: "border-color 0.3s ease",
    "&:focus": {
      outline: "none",
      borderColor: theme.colors.primary,
      boxShadow: `0 0 0 3px ${theme.colors.primary}20`,
    },
  },

  // Textos
  text: {
    h1: {
      fontFamily: theme.fonts.primary,
      fontSize: theme.typography.fontSizes.h1,
      fontWeight: theme.typography.fontWeights.bold,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.lg,
    },
    h2: {
      fontFamily: theme.fonts.primary,
      fontSize: theme.typography.fontSizes.h2,
      fontWeight: theme.typography.fontWeights.semibold,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.md,
    },
    h3: {
      fontFamily: theme.fonts.secondary,
      fontSize: theme.typography.fontSizes.h3,
      fontWeight: theme.typography.fontWeights.semibold,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.sm,
    },
    body: {
      fontFamily: theme.fonts.body,
      fontSize: theme.typography.fontSizes.md,
      fontWeight: theme.typography.fontWeights.normal,
      color: theme.colors.text.primary,
      lineHeight: 1.6,
    },
    caption: {
      fontFamily: theme.fonts.body,
      fontSize: theme.typography.fontSizes.sm,
      fontWeight: theme.typography.fontWeights.normal,
      color: theme.colors.text.secondary,
    },
  },
};

// Estilos específicos para Material-UI
export const muiStyles = {
  // Para usar con sx prop
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: `0 ${theme.spacing.md}`,
  },

  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  flexBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  buttonPrimary: {
    backgroundColor: theme.colors.primaryDayTime,
    color: theme.colors.white,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderRadius: theme.borderRadius.md,
    "&:hover": {
      backgroundColor: theme.colors.gray[700],
      transform: "translateY(-2px)",
      boxShadow: theme.shadows.md,
    },
  },

  buttonSecondary: {
    backgroundColor: "transparent",
    color: theme.colors.primary,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderRadius: theme.borderRadius.md,
    border: `2px solid ${theme.colors.primary}`,
    "&:hover": {
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,
      transform: "translateY(-2px)",
      boxShadow: theme.shadows.md,
    },
  },
};

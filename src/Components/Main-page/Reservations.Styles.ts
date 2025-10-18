import {
  borderRadius,
  colors,
  fonts,
  spacing,
  typography,
} from "../../styles/theme";

export const ReservationsStyles = {
  container: {
    width: "100%",
    height: "100%",
    //backgroundColor: colors.primaryDayTime,
    padding: spacing.md,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.md,
  },

  title: {
    fontFamily: fonts.secondary,
    fontSize: typography.fontSizes.xl,
    fontWeight: typography.fontWeights.semibold,
    color: colors.text.primary,
  },

  descriptionContainer: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.sm,
    paddingX: spacing.md,
  },

  description: {
    fontFamily: fonts.accent,
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.normal,
    color: colors.text.secondary,
  },

  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  phoneIcon: {
    width: "30px",
    height: "30px",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.2) rotate(5deg)",
    },
    animation: "wiggle 1s ease-in-out infinite",
  },

  button: {
    fontFamily: fonts.accent,
    fontSize: typography.fontSizes.sm,
    paddingX: spacing.xl,
    paddingY: spacing.sm,
    borderRadius: borderRadius.sm,
    textAlign: "center",
    cursor: "pointer",
    color: colors.buttons.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    backgroundColor: colors.buttons.primary,
    "&:hover": {
      backgroundColor: colors.buttons.secondary,
      color: colors.buttons.primary,
    },
  },
};

// Keyframes para la animación
const keyframes = `
  @keyframes wiggle {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-3px) rotate(1deg); }
    50% { transform: translateY(-5px) rotate(0deg); }
    75% { transform: translateY(-3px) rotate(-1deg); }
  }
`;

// Inyectar los keyframes en el DOM
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = keyframes;
  document.head.appendChild(styleSheet);
}

// Tema principal de la aplicación
export const theme = {
  colors: {
    primaryDayTime: " #FAEDCA",
    primaryNightTime: " #447D9B",

    // Colores de texto
    text: {
      primary: " #638C6D",
      secondary: " #273F47",
      tertiary: " #D7D7D7",
    },

    buttons: {
      primary: " #FE7743",
      secondary: " #F6F6F6",
      tertiary: " #273f47",
    },

    // Colores de estado
    success: " #27AE60",
    warning: " #F39C12",
    error: " #E74C3C",
    info: " #3498DB",

    // Colores neutros
    white: "#FFFFFF",
    black: "#000000",
    gray: {
      100: "#F8F9FA",
      200: "#E9ECEF",
      300: "#DEE2E6",
      400: "#CED4DA",
      500: "#ADB5BD",
      600: "#6C757D",
      700: "#495057",
      800: "#343A40",
      900: "#212529",
    },
  },

  // Espaciado
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },

  // Fuentes
  fonts: {
    primary: "'Playfair Display', serif", // Para títulos principales
    secondary: "'Raleway', sans-serif", // Para subtítulos y texto mediano
    body: "'Open Sans', sans-serif", // Para texto normal
    accent: "'Open Sans', sans-serif", // Para texto de acento
  },

  // Tamaños de fuente
  typography: {
    fontSizes: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      xxl: "24px",
      h1: "32px",
      h2: "28px",
      h3: "24px",
      h4: "20px",
      h5: "18px",
      h6: "16px",
    },
    fontWeights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  // Bordes
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "50%",
  },

  // Sombras
  shadows: {
    sm: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    md: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
    lg: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    xl: "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
  },
};

// Exportar colores individuales para uso directo
export const colors = theme.colors;
export const spacing = theme.spacing;
export const fonts = theme.fonts;
export const typography = theme.typography;
export const borderRadius = theme.borderRadius;
export const shadows = theme.shadows;

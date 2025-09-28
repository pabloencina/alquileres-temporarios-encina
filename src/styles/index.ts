// Exportar todo desde un solo lugar para facilitar las importaciones
export {
  theme,
  colors,
  spacing,
  fonts,
  typography,
  borderRadius,
  shadows,
} from "./theme";
export { globalStyles, muiStyles } from "./globalStyles";

// Re-exportar para uso común
export { theme as defaultTheme } from "./theme";

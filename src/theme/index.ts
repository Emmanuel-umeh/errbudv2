import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f5f9ff",
      100: "#dbe9ff",
      200: "#b3d2ff",
      300: "#80b3ff",
      400: "#4d94ff",
      500: "#4A90E2", // primary brand color
      600: "#005ce6",
      700: "#0047b3",
      800: "#003280",
      900: "#001a4d",
    },
  },

  semanticTokens: {
    colors: {
      primary: "brand.500",
    },
  },

  fonts: {
    heading: "var(--font-poppins)",
    body: "var(--font-inter)",
  },
});

export default theme;

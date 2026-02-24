import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#212121",
      paper: "#2f2f2f"
    },

    text: {
      primary: "#ececec",
      secondary: "#b4b4b4"
    },

    divider: "#3a3a3a"
  },

  typography: {
    fontFamily:
      "Inter, system-ui, Arial, sans-serif"
  },

  shape: {
    borderRadius: 12
  }
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",

    background: {
      default: "#ffffff",
      paper: "#f7f7f8"
    },

    text: {
      primary: "#000000",
      secondary: "#666666"
    },

    divider: "#dddddd"
  },

  typography: {
    fontFamily:
      "Inter, system-ui, Arial, sans-serif"
  },

  shape: {
    borderRadius: 12
  }
});
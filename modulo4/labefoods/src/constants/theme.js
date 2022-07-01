import { createTheme } from "@mui/material";
import { themeBorder, themeGreen } from "./colors";
import { themeGray } from "./colors";

export const myCustomTheme = createTheme({
    palette: {
        primary: {
            main: themeGreen,
        },
        secondary: {
            main: themeGray,
        },
        menu: {
            main: "white",
        },
        border: {
            main: themeBorder,
        },
    },
});

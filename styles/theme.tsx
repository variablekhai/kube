import { createTheme } from "@mui/material/styles";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const Colors = {
    primary: "#9155fd",
    secondary: "#57535e",
}

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary,
        },
        secondary: {
            main: Colors.secondary,
        },
        success: {
            main: "#56ca00",
        },
        warning: {
            main: "#ffb400",
        },
        error: {
            main: "#ff4c51",
        },
        info: {
            main: "#16b1ff"
        }
        
    },
    typography: {
        fontFamily: "Poppins, sans-serif",
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
        },
        h2: {
            fontSize: "1.7rem",
            fontWeight: 600,
            color: "rgba(58, 53, 65, 0.87)",
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: 700,
        },
        h4: {
            fontSize: "1.25rem",
            fontWeight: 700,
        },
        h5: {
            fontSize: "1rem",
            fontWeight: 300,
            color: "rgba(58, 53, 65, 0.6)",
        },
        h6: {
            fontSize: "0.875rem",
            fontWeight: 700,
        },
    }
});

export default theme;
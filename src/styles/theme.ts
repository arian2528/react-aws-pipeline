import { createTheme } from "@mui/material";
import { blue, green, orange } from "@mui/material/colors";

const theme = createTheme({
    palette: {
      primary: {
            main: blue[700],
            light: blue[200],
            dark: blue[900],
            contrastText: '#000000',
        },
      secondary: {
            main: green[500],
            light: green[200],
            dark: green[900],
            contrastText: '#000000',
        },
        warning: {
            main: orange[500],
            light: orange[200],
            dark: orange[900],
            contrastText: '#000000',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
        fontWeightBold: 600,
    }
  });

  export default theme
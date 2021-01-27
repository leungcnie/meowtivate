import { createMuiTheme } from "@material-ui/core/styles";

// Theme
const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    common: {
      primary: "#f0e1d0",
      secondary: "#a0cdca",
      light: "rgb(255, 255, 255, 0.9)",
      dark: "#fff",
    },
    primary: {
      light: "#fff",
      main: "#fff",
    },
    // main: "#f0e1d0",
    // nav: "#a0cdca",
    // background: "rgb(255, 255, 255, 0.9)",
    // list: "#fee2b1",
    // collection: "#fcd0c5",
    // account: "#aedaa5",
    // inventory: "#e0c8df",
    // listOnHover: "#dbc6a1",
    // collectionOnHover: "#e6c3bb",
    // accountOnHover: "#a2bb9d",
    // inventoryOnHover: "#c9bcc8",
    // wallet: "antiquewhite",
    // cardContainer: "rgb(255, 255, 255, 0.9)",
  },
  text: {
    light: "#000",

    // primary: "Black",
    // secondary: "#5c5c5c",
    // onHover: "white",
    // gray: "grey",
    // green: "green",
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    common: {
      primary: "#fff",
      secondary: "#fff",
      light: "#000",
      dark: "#000",
    },
    primary: {
      light: "#fff",
      main: "#000",
    },
    // main: "#f0e1d0",
    // nav: "#a0cdca",
    // background: "rgb(255, 255, 255, 0.9)",
    // list: "#fee2b1",
    // collection: "#fcd0c5",
    // account: "#aedaa5",
    // inventory: "#e0c8df",
    // listOnHover: "#dbc6a1",
    // collectionOnHover: "#e6c3bb",
    // accountOnHover: "#a2bb9d",
    // inventoryOnHover: "#c9bcc8",
    // wallet: "antiquewhite",
    // cardContainer: "rgb(255, 255, 255, 0.9)",
  },
  text: {
    light: "#000",
    // primary: "Black",
    // secondary: "#5c5c5c",
    // onHover: "white",
    // gray: "grey",
    // green: "green",
  },
});

export default { lightTheme, darkTheme };
// const darkTheme = createMuiTheme({
//   palette: {
//     primary: {
//       light: "#757ce8",
//       main: "#3f50b5",
//       dark: "#002884",
//       contrastText: "#fff",
//       blue: "#a0cdca",
//       listButton: "#fee2b1",
//       collectionButton: "",
//       accountButton: "",
//       container: "theme.palette.cardContainer",
//     },
//     secondary: {
//       light: "#ff7961",
//       main: "#f44336",
//       dark: "#ba000d",
//       contrastText: "#000",
//     },
//   },
// });

// Theme

// const [darkMode, setDarkMode] = useState(false);

// const theme = createMuiTheme({
//   palette: {
//     type: darkMode ? "dark" : "light",
//   },
// });

// // lightTheme
// console.log(lightTheme.palette.background);

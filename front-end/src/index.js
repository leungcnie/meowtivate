import React from "react";
import ReactDOM from "react-dom";
import "./components/styles/index.css";
import App from "./components/App";
// import lightTheme from "./components/Theme";
// import { createMuiTheme } from "@material-ui/core/styles";
// import { ThemeProvider } from "@material-ui/styles";

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={lightTheme}> */}
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

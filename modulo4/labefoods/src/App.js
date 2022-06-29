import React from "react";
import styled from "styled-components";
import { Router } from "./routes/Router";
import { GlobalState } from "./global/GlobalState";
import { FontStyle } from "./global/FontStyle";
import { GlobalStyle } from "./global/GlobalStyle";
import { ThemeProvider } from "@mui/material";
import { myCustomTheme } from "./constants/theme";

function App() {
  return (
    <GlobalState>
      <ThemeProvider theme={myCustomTheme}>
      <FontStyle />
      <GlobalStyle />
      <Router />
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;

import React from "react";
import { createGlobalStyle } from "styled-components";

export const FontStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('./assets/fonts/roboto-v30-latin-regular.woff2') format("woff2"),
      url('./assets/fonts/roboto-v30-latin-regular.woff') format("woff"),
      url('./assets/fonts/roboto-v30-latin-regular.ttf') format("truetype");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }

  .Text-Style-2 {
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #d0d0d0;
  }

  .Text-Style {
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
  }
`;

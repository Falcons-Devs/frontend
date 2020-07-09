import { createGlobalStyle } from "styled-components";

/*------ Declaration order ------*/

/* Positioning */
/* Box-model */
/* Typography */
/* Visual */
/* Misc */

/*-- Misc: (Miscellaneous - can be known as all properties that are highly experimental or do not fit any other category) --*/

/*------ Fin Declaration order ------*/

export const GlobalStyle = createGlobalStyle`
  html {
    /* Positioning */
    min-height: 100%;
  position: relative;
    /* Box-model */
    /* Typography */
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', system-ui, sans-serif;
    /* Visual */
    box-sizing: border-box;
    /* Misc */
  }

  *, *::before, *::after {
    /* Positioning */
    /* Box-model */
    /* Typography */
    /* Visual */
    box-sizing: inherit;
    /* Misc */
  }

  * {
    /* Positioning */
    /* Box-model */
    margin: 0;
    padding: 0;
    /* Typography */
    /* Visual */
    /* Misc */
  }

  ul {
    /* Positioning */
    /* Box-model */
    /* Typography */
    /* Visual */
    list-style: none;
    /* Misc */
  }

  button {
    /* Positioning */
    /* Box-model */
    /* Typography */
    /* Visual */
    background: transparent;
    border: 0;
    outline: 0;
    /* Misc */
  }

  body {
    /* Positioning */
    /* Box-model */
    width: 100%;
    margin-bottom: 60px;
    ${"" /* margin: 0 auto;
    height: 100vh; */}
    /* Typography */
    font-size: 17px;
    color: #202124;
    text-rendering: optimizeLegibility;
    /* Visual */
    background-color: #fff;
    /* Misc */
    overscroll-behavior: none; /* Avoid bounces when we scroll */
    
    @media (max-width: 375px) {
      margin-bottom: 150px;
    }
  }

  body a {
    color: #3266D5;
    text-decoration: none;
    font-weight: 500;
  }
`;

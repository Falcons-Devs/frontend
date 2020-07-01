import { createGlobalStyle } from "styled-components";

/*------ Orden de la declaración ------*/

/* Posicionamiento */
/* Modelo de caja (Box-model) */
/* Tipografía */
/* Visual */
/* Misc */

/*-- Misc: (Misceláneas - se puede conocer como todas las propiedades que son altamente experimentales o que no se ajustan a ninguna otra categoría --*/

/*------ Fin Orden de la declaración ------*/

export const GlobalStyle = createGlobalStyle`
  html {
    /* Posicionamiento */
    /* Modelo de caja (Box-model) */
    /* Tipografía */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', system-ui, sans-serif;
    /* Visual */
    box-sizing: border-box;
    /* Misc */
  }

  *, *::before, *::after {
    /* Posicionamiento */
    /* Modelo de caja (Box-model) */
    /* Tipografía */
    /* Visual */
    box-sizing: inherit;
    /* Misc */
  }

  ul, li, h1, h2, h3, p, button {
    /* Posicionamiento */
    /* Modelo de caja (Box-model) */
    margin: 0;
    padding: 0;
    /* Tipografía */
    /* Visual */
    /* Misc */
  }

  ul {
    /* Posicionamiento */
    /* Modelo de caja (Box-model) */
    /* Tipografía */
    /* Visual */
    list-style: none;
    /* Misc */
  }

  button {
    /* Posicionamiento */
    /* Modelo de caja (Box-model) */
    /* Tipografía */
    /* Visual */
    background: transparent;
    border: 0;
    outline: 0;
    /* Misc */
  }

  body {
    /* Posicionamiento */
    /* Modelo de caja (Box-model) */
    margin: 0 auto;
    width: 100%;
    /* Tipografía */
    font-size: 17px;
    color: #202124;
    text-rendering: optimizeLegibility;
    /* Visual */
    background-color: #fff;
    /* Misc */
    overscroll-behavior: none; /* Evitar rebotes cuando hacemos scroll */
  }

  body a {
    color: #3266D5;
    text-decoration: none;
    font-weight: 500;
  }
`;

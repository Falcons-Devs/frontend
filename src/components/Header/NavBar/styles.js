import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Nav = styled.nav`
  /* Posicionamiento */
  /* Modelo de caja (Box-model) */
  display: flex;
  align-items: center;
  justify-content: center;
  /* Tipografía */
  /* Visual */
  /* Misc */
`;

export const Link = styled(LinkRouter)`
  /* Posicionamiento */
  position: relative;
  /* Modelo de caja (Box-model) */
  display: table-cell;
  margin-left: 20px;
  padding: 10px 0 9px;
  /* Tipografía */
  font-family: "Italianno", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", system-ui,
    sans-serif;
  font-size: 32px;
  font-weight: 400;
  color: #fff;
  letter-spacing: 0.25px;
  line-height: 1.28571;
  text-decoration: none;
  /* Visual */
  vertical-align: middle;
  /* Misc */

  &:active,
  &:focus,
  &:hover {
    /* Posicionamiento */
    bottom: -1px;
    /* Modelo de caja (Box-model) */
    border-bottom: 2px solid #de18ad;
    /* Tipografía */
    color: #000;
    /* Visual */
    /* Misc */
  }

  &[aria-current] {
    /* Posicionamiento */
    bottom: -1px;
    /* Modelo de caja (Box-model) */
    border-bottom: 2px solid #de18ad;
    /* Tipografía */
    color: #000;
    /* Visual */
    /* Misc */
  }
`;

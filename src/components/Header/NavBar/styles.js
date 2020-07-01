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
  font-size: 14px;
  font-weight: 400;
  color: #5f6368;
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
    /* Modelo de caja (Box-model) */
    /* Tipografía */
    color: #000;
    /* Visual */
    /* Misc */
  }

  &[aria-current] {
    border-bottom: 2px solid #3d74d0;
    bottom: -1px;
    color: #000;
  }
`;

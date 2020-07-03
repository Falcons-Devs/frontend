import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Nav = styled.nav`
  /* Positioning */
  /* Box-model */
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* Typography */
  /* Visual */
  /* Misc */
`;

export const Link = styled(LinkRouter)`
  /* Positioning */
  position: relative;
  /* Box-model */
  display: table-cell;
  margin-left: 20px;
  padding: 10px 0 9px;
  /* Typography */
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
    /* Positioning */
    /* Box-model */
    /* Typography */
    color: #000;
    /* Visual */
    /* Misc */
  }
`;

export const P = styled.p`
  margin-left: 20px;
`;

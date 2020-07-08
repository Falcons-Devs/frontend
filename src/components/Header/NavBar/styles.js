import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Nav = styled.nav`
  /* Positioning */
  /* Box-model */
  display: flex;
  align-items: center;
  justify-content: center;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    font-size: 24px;
  }
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
    bottom: -1px;
    /* Box-model */
    border-bottom: 2px solid #de18ad;
    /* Typography */
    color: #000;
    /* Visual */
    /* Misc */
    /* Responsive */
    @media (max-width: 375px) {
      border: none;
    }
  }

  &[aria-current] {
    /* Positioning */
    bottom: -1px;
    /* Box-model */
    border-bottom: 2px solid #de18ad;
    /* Typography */
    color: #000;
    /* Visual */
    /* Misc */
    /* Responsive */
    @media (max-width: 375px) {
      border: none;
    }
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Profile = styled.div`
  margin-left: 15px;
`;

export const NavMobile = styled.nav`
  display: flex;
  align-items: center;
`;

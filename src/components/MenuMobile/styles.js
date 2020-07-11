import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Menu = styled.div`
  /* Positioning */
  /* Box-model */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: calc(100vh - 250px);
  /* Typography */
  /* Visual */
  background-color: #02b3b1;
  /* Responsive */
`;

export const Link = styled(LinkRouter)`
  /* Positioning */
  /* Box-model */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 90%;
  /* Typography */
  color: #fcfcfc;
  font-size: 32px;
  text-transform: uppercase;
  /* Visual */
  border-bottom: 2px solid #de18ad;
  /* Responsive */

  &:active {
    /* Positioning */
    /* Box-model */
    /* Typography */
    /* Visual */
    color: black;
    /* Responsive */
    opacity: 0.8;
  }
`;

import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Menu = styled.div`
  width: 100vw;
  height: calc(100vh - 250px);
  background-color: #02b3b1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Link = styled(LinkRouter)`
  color: #fcfcfc;
  font-size: 32px;
  text-transform: uppercase;
`;

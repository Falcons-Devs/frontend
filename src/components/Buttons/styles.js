import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Button = styled.button`
  color: #fcfcfc;
  display: flex;
  font-size: 1.5em;
  background-color: ${(props) => props.color};
  padding: 8px 50px;
  border-radius: 50px;
  margin: 30px auto;
  cursor: pointer;
`;

export const Link = styled(LinkRouter)`
  color: #fcfcfc;
  font-size: 1.5em;
  background-color: #de18ad;
  padding: 8px 50px;
  border-radius: 50px;
`;

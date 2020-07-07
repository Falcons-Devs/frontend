import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Status = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-content: center;

  h3 {
    font-size: 2em;
  }
`;

export const Link = styled(LinkRouter)`
  margin: 0;
`;

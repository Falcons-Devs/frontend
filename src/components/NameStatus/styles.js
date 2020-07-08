import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Status = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  /* Responsive */
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
  h3 {
    font-size: 2em;
    /* Responsive */
    @media (max-width: 375px) {
      font-size: 32px;
    }
  }
`;

export const Link = styled(LinkRouter)`
  margin: 0;
`;

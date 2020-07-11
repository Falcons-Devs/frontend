import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Status = styled.div`
  /* Positioning */
  /* Box-model */
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: space-between;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    width: 70%;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    width: 95%;
    /* Typography */
    /* Visual */
  }
  h3 {
    /* Positioning */
    /* Box-model */
    /* Typography */
    font-size: 2em;
    /* Visual */
    /* Responsive */
    @media (max-width: 375px) {
      /* Positioning */
      /* Box-model */
      /* Typography */
      font-size: 24px;
      /* Visual */
    }
  }
`;

export const Link = styled(LinkRouter)`
  /* Positioning */
  /* Box-model */
  margin: 0;
  /* Typography */
  /* Visual */
  /* Responsive */
`;

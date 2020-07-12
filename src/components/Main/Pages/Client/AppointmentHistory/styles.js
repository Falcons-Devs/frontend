import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* Box-model */
  margin: 20px auto;
  width: 95vw;
  max-width: 1200px;
  padding: 0px 20px;
  /* Typography */
  /* Visual */
`;

export const Container = styled.div`
  /* Positioning */
  /* Box-model */
  display: grid;
  grid-gap: 20px;
  align-items: center;
  justify-content: center;
  /* Typography */
  /* Visual */
  /* Responsive */
`;
export const Span = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    display: none;
    /* Typography */
    /* Visual */
  }
`;

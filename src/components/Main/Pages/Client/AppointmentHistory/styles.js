import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* (Box-model) */
  margin: 20px auto;
  width: 1200px;
  max-width: 1200px;
  padding: 0px 20px;
  /* Typography */
  /* Visual */
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  align-items: center;
  justify-content: center;
`;
export const Span = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  /* Responsive */
  @media (max-width: 375px) {
    display: none;
  }
`;

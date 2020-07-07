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
  /* Responsive */
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 75px 1fr;
`;
export const ArrowButton = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`;
export const Table = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;

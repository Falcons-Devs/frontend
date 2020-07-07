import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* (Box-model) */
  margin: 20px auto;
  height: inherit;
  width: 1200px;
  max-width: 1200px;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    width: 90vw;
    height: 80.5vh;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 75px 250px 1fr;
  grid-gap: 20px;
  /* Responsive */
  @media (max-width: 768px) {
    grid-template-rows: 75px 150px 1fr;
  }
`;
export const ArrowButton = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;
export const Hero = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;
export const Table = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
`;

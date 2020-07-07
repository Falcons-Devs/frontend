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
  grid-template-columns: repeat(1fr, 2);
  grid-template-rows: repeat(1fr, 4);
  /* Responsive */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1fr, 4);
  }
`;
export const ArrowButton = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`;

export const Hero = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;
export const Beautician = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
`;
export const Procedures = styled.div`
  grid-column: 1 / 3;
  grid-row: 4 / 5;
`;
export const Schedule = styled.div`
  grid-column: 1 / 3;
  grid-row: 5 / 6;
`;
export const ConfirmButton = styled.div`
  grid-column: 1 / 3;
  grid-row: 6 / 7;
`;

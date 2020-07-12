import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* Box-model */
  margin: 20px auto;
  width: 1200px;
  max-width: 1200px;
  padding: 0px 20px;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    width: 90vw;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    margin: 10px 0;
    width: 100vw;
    /* Typography */
    /* Visual */
  }
`;

export const Container = styled.div`
  /* Positioning */
  /* Box-model */
  display: grid;
  grid-template-columns: repeat(1fr, 2);
  grid-template-rows: repeat(1fr, 4);
  /* Typography */
  /* Visual */
  /* Responsive */
`;
export const ArrowButton = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  /* Typography */
  /* Visual */
  /* Responsive */
`;

export const Hero = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  /* Typography */
  /* Visual */
  /* Responsive */
`;
export const Procedures = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  /* Typography */
  /* Visual */
  /* Responsive */
`;
export const CancelButton = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  /* Typography */
  /* Visual */
  /* Responsive */
`;
export const ConfirmButton = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  /* Typography */
  /* Visual */
  /* Responsive */
`;

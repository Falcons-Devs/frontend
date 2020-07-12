import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* Box-model */
  margin: 20px auto;
  height: inherit;
  width: 1200px;
  max-width: 1200px;
  /* Typography */
  /* Visual */
  /* Misc */
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
    margin: 10px;
    width: calc(100% - 20px);
    /* Typography */
    /* Visual */
    /* Responsive */
  }
`;

export const Container = styled.div`
  /* Positioning */
  /* Box-model */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 75px 250px 1fr;
  grid-gap: 20px;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    grid-template-rows: 75px 150px 1fr;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-template-rows: 50px 1px 1fr;
    width: 100%;
    /* Typography */
    /* Visual */
  }
`;
export const ArrowButton = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  margin-top: 20px;
  margin-left: 20px;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
`;
export const Hero = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
`;
export const Table = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
`;

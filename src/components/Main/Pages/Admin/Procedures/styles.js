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
  grid-template-columns: 1fr;
  grid-template-rows: 150px 1fr;
  margin: 0 auto;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-template-rows: 75px 1fr;
    /* Typography */
    /* Visual */
  }
`;

export const Main = styled.div`
  /* Positioning */
  /* Box-model */
  display: flex;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  align-items: center;
  justify-content: space-between;
  /* Typography */
  /* Visual */
  /* Responsive */
`;

export const Table = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  /* Typography */
  /* Visual */
  /* Responsive */
`;

export const ProcedureContainer = styled.div`
  /* Positioning */
  /* Box-model */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* Typography */
  /* Visual */
  /* Responsive */
`;

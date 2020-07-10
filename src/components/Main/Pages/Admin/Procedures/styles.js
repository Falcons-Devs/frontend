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
  }
  @media (max-width: 375px) {
    margin: 10px 0;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 150px 1fr;
  margin: 0 auto;
  @media (max-width: 375px) {
    grid-template-rows: 75px 1fr;
  }
`;

export const Main = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Table = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

export const ProcedureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

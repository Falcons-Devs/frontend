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
    height: 80.5vh;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 150px 1fr;
`;
export const Main = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Table = styled.div`
  grid-column: 1 / 4;
  grid-row: 2 / 3;
`;

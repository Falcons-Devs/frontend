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
    width: 85vw;
    height: calc(100vh - 200px);
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  /* Responsive */
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const Clients = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  /* Responsive */
  @media (max-width: 768px) {
    grid-row: 1 / 2;
  }
`;
export const Beautician = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;
export const Procedures = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  /* Responsive */
  @media (max-width: 768px) {
    grid-column: 1 / 2;
  }
`;
export const Users = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  /* Responsive */
  @media (max-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

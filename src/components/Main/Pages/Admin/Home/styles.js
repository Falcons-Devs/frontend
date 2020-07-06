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
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
export const Clients = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
`;
export const Beautician = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;
export const Procedures = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;
export const Users = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 3;
`;

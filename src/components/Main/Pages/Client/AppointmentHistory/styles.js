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
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  align-items: center;
  justify-content: center;
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
export const Calendar = styled.div`
  grid-column: 1 / 3;
  grid-row: 5 / 6;
`;
export const CancelButton = styled.div`
  grid-column: 1 / 2;
  grid-row: 6 / 7;
`;
export const ConfirmButton = styled.div`
  grid-column: 2 / 3;
  grid-row: 6 / 7;
`;

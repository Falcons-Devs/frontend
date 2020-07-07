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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px 1fr 1fr;
`;
export const ArrowButton = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;
export const Title = styled.div`
  grid-column: 2 / 3;
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

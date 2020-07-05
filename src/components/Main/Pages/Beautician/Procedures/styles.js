import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 2);
  grid-template-rows: repeat(1fr, 4);
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
export const Procedures = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
`;
export const CancelButton = styled.div`
  grid-column: 1 / 2;
  grid-row: 4 / 5;
`;
export const ConfirmButton = styled.div`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
`;
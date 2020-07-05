import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 3);
  grid-template-rows: 1fr 1fr;
`;
export const ArrowButton = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;
export const Title = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;
export const CreateButton = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
`;
export const Table = styled.div`
  grid-column: 1 / 4;
  grid-row: 2 / 3;
`;

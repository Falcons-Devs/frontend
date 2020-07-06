import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
export const ArrowButton = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`;
export const Dairy = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;

import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(1fr, 5);
`;
export const ArrowButton = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;
export const Title = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;
export const Beautician = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;
export const Calendar = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
`;
export const Procedures = styled.div`
  grid-column: 1 / 3;
  grid-row: 4 / 5;
`;
export const CreateButton = styled.div`
  grid-column: 1 / 3;
  grid-row: 5 / 6;
`;

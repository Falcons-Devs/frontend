import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 4);
  grid-template-rows: repeat(1fr, 3);
`;
export const ArrowButton = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;
export const Title = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;
export const HistoryAppointments = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;
export const RealizedProcedures = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;
export const RealizedPayments = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
`;
export const FollowingAppointments = styled.div`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
`;
export const Table = styled.div`
  grid-column: 1 / 5;
  grid-row: 3 / 4;
`;

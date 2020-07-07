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
    height: calc(100vh - 200px);
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 4);
  grid-template-rows: repeat(1fr, 3);
`;
export const Main = styled.div`
  grid-column: 1 / 5;
  grid-row: 1 / 2;
`;
export const HistoryAppointments = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  margin: 0 20px;
`;
export const RealizedProcedures = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  margin: 0 20px;
`;
export const RealizedPayments = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  margin: 0 20px;
`;
export const FollowingAppointments = styled.div`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  margin: 0 20px;
`;
export const Table = styled.div`
  grid-column: 1 / 5;
  grid-row: 3 / 4;
`;

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
  }
  @media (max-width: 375px) {
    margin: 10px 0;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 4);
  grid-template-rows: repeat(1fr, 3);
  @media (max-width: 375px) {
    grid-template-columns: 350px;
    grid-template-rows: 75px;
  }
`;
export const Main = styled.div`
  grid-column: 1 / 5;
  grid-row: 1 / 2;
  @media (max-width: 375px) {
    grid-column: 1 / 2;
  }
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

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 0 10px;
`;

export const Select = styled.select`
  outline: none;
  border: 1px solid #02b3b1;
  border-radius: 10px;
  padding: 7px 0px;
  text-align: center;
  width: 80%;
  color: rgba(47, 47, 47, 0.5);
  @media (max-width: 375px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;

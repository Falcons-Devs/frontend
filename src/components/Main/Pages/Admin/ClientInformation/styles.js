import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* Box-model */
  margin: 20px auto;
  width: 1200px;
  max-width: 1200px;
  padding: 0px 20px;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    width: 90vw;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    margin: 10px 0;
    /* Typography */
    /* Visual */
  }
`;

export const Container = styled.div`
  /* Positioning */
  /* Box-model */
  display: grid;
  grid-template-columns: repeat(1fr, 4);
  grid-template-rows: repeat(1fr, 3);
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-template-columns: 350px;
    grid-template-rows: 75px;
    /* Typography */
    /* Visual */
  }
`;
export const Main = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 5;
  grid-row: 1 / 2;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-column: 1 / 2;
    /* Typography */
    /* Visual */
  }
`;
export const HistoryAppointments = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  margin: 0 20px;
  /* Typography */
  /* Visual */
  /* Responsive */
`;
export const RealizedProcedures = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  margin: 0 20px;
  /* Typography */
  /* Visual */
  /* Responsive */
`;
export const RealizedPayments = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  margin: 0 20px;
  /* Typography */
  /* Visual */
  /* Responsive */
`;
export const FollowingAppointments = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  margin: 0 20px;
  /* Typography */
  /* Visual */
  /* Responsive */
`;
export const Table = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 5;
  grid-row: 3 / 4;
  /* Typography */
  /* Visual */
  /* Responsive */
`;

export const SelectContainer = styled.div`
  /* Positioning */
  /* Box-model */
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 0 10px;
  /* Typography */
  /* Visual */
  /* Responsive */
`;

export const Select = styled.select`
  /* Positioning */
  /* Box-model */
  padding: 7px 0px;
  width: 80%;
  /* Typography */
  color: rgba(47, 47, 47, 0.5);
  text-align: center;
  outline: none;
  /* Visual */
  border: 1px solid #02b3b1;
  border-radius: 10px;
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    /* Typography */
    /* Visual */
  }
`;

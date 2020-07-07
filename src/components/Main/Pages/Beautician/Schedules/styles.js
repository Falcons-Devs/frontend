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
    height: 80.5vh;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 75px 1fr 1fr 1fr;
  /* Responsive */
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 75px 150px 1fr 1fr 150px;
  }
`;
export const ArrowButton = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  grid-column: 1 / 4;
  grid-row: 1 / 2;
`;
export const Hero = styled.div`
  grid-column: 1 / 4;
  grid-row: 2 / 3;
  /* Responsive */
  @media (max-width: 768px) {
    grid-column: 1 / 3;
  }
`;
export const DayCard = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  width: 80%;
  /* Responsive */
  @media (max-width: 768px) {
    grid-column: 1 / 3;
  }
`;
export const ScheduleCard = styled.div`
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  /* Responsive */
  @media (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 4 / 5;
  }
`;
export const CancelButton = styled.div`
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  /* Responsive */
  @media (max-width: 768px) {
    grid-row: 5 / 6;
  }
`;
export const ConfirmButton = styled.div`
  grid-column: 3 / 4;
  grid-row: 4 / 5;
  /* Responsive */
  @media (max-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 5 / 6;
  }
`;

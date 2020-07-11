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
    margin: 0;
    /* Typography */
    /* Visual */
  }
`;

export const Container = styled.div`
  /* Positioning */
  /* Box-model */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 75px 1fr 1fr 1fr;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 75px 150px 1fr 1fr 150px;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-template-columns: 150px 150px;
    grid-template-rows: 50px 1fr 200px 100px;
    /* Typography */
    /* Visual */
  }
`;
export const ArrowButton = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  margin-top: 20px;
  margin-left: 20px;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-column: 1 / 3;
    /* Typography */
    /* Visual */
  }
`;
export const Hero = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 4;
  grid-row: 2 / 3;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    grid-column: 1 / 3;
    /* Typography */
    /* Visual */
  }
`;
export const DayCard = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  width: 80%;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    grid-column: 1 / 3;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-row: 2 / 3;
    /* Typography */
    /* Visual */
  }
`;
export const ScheduleCard = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    grid-column: 1 / 3;
    grid-row: 4 / 5;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-row: 3 / 4;
    /* Typography */
    /* Visual */
  }
`;
export const CancelButton = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    grid-row: 5 / 6;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-row: 4 / 5;
    /* Typography */
    /* Visual */
  }
`;
export const ConfirmButton = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 3 / 4;
  grid-row: 4 / 5;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    grid-column: 2 / 3;
    grid-row: 5 / 6;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-row: 4 / 5;
    /* Typography */
    /* Visual */
  }
`;

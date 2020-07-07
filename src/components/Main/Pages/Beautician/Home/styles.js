import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* (Box-model) */
  margin: 20px auto;
  height: inherit;
  width: 1200px;
  max-width: 1200px;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Reponsive */
  @media (max-width: 768px) {
    width: 90vw;
    height: 80.5vh;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  /* Responsive */
  @media (max-width: 768px) {
    grid-template-rows: 190px 190px 1fr;
  }
`;

export const Profile = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  /* Responsive */
  @media (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    margin-top: 20px;
  }
`;

export const Agenda = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  /* Responsive */
  @media (max-width: 768px) {
    grid-row: 1 / 3;
  }
`;

export const Schedule = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  /* Responsive */
  @media (max-width: 768px) {
  }
`;

export const Procedures = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  /* Responsive */
  @media (max-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;

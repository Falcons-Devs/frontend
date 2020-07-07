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
`;

export const Profile = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

export const Agenda = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;

export const Schedule = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

export const Procedures = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
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

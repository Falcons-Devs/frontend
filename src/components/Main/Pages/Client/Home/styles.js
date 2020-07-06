import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
export const Profile = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
`;
export const MyAppointment = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 3;
`;
export const CreateAppointment = styled.div`
  grid-column: 1 / 4;
  grid-row: 3 / 4;
`;

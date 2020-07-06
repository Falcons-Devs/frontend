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
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
`;
export const Profile = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;
export const MyAppointment = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;
export const CreateAppointment = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;

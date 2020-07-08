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
  /* Responsive */
  @media (max-width: 768px) {
    width: 90vw;
  }
  /* Responsive */
  @media (max-width: 375px) {
    margin: 0 auto;
  }
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  /* Responsive */
  @media (max-width: 375px) {
    grid-template-rows: 180px 1fr;
    grid-gap: 5px;
  }
`;
export const Profile = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  /* Responsive */
  @media (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
  @media (max-width: 375px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
`;
export const MyAppointment = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  /* Responsive */
  @media (max-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  @media (max-width: 375px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;
export const CreateAppointment = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  /* Responsive */
  @media (max-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  @media (max-width: 375px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

export const H2 = styled.h2`
  display: none;
  /* Responsive */
  @media (max-width: 375px) {
    display: block;
    margin: 20px 0;
    text-align: center;
  }
`;

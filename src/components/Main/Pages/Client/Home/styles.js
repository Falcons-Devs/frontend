import styled from "styled-components";
export const Wrap = styled.div`
  /* Positioning */
  /* Box-model */
  margin: 20px auto;
  height: inherit;
  width: 100%;
  max-width: 1200px;
  padding: 0px 20px;
  display: grid;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    width: 90vw;
    /* Typography */
    /* Visual */
  }
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    display: flex;
    justify-content: center;
    /* Box-model */
    /* Typography */
    /* Visual */
  }
`;
export const Container = styled.div`
  /* Positioning */
  /* Box-model */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  grid-gap: 20px;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-template-columns: 150px 150px;
    grid-template-rows: 180px 1fr;
    /* Typography */
    /* Visual */
  }
`;
export const Profile = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    /* Typography */
    /* Visual */
  }
`;
export const MyAppointment = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    /* Typography */
    /* Visual */
  }
`;
export const CreateAppointment = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  align-items: flex-start;
  width: 90%;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    /* Typography */
    /* Visual */
  }
`;

export const H2 = styled.h2`
  /* Positioning */
  /* Box-model */
  display: none;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    display: block;
    margin: 20px 0;
    /* Typography */
    text-align: center;
    /* Visual */
  }
`;

import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* Box-model */
  margin: 20px auto;
  height: inherit;
  width: 1200px;
  max-width: 1200px;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Reponsive */
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    /* Typography */
    /* Visual */
    /* Misc */
  }
`;

export const Container = styled.div`
  /* Positioning */
  /* Box-model */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    grid-template-rows: 190px 190px 1fr;
    grid-row-gap: 20px;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 190px 150px 150px;
    grid-row-gap: 0;
    align-items: center;
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
    grid-row: 3 / 4;
    margin: 20px 0px;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    margin-top: 0;
    margin-bottom: 20px;
    /* Typography */
    /* Visual */
  }
`;

export const Agenda = styled.div`
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
    grid-row: 1 / 3;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-column: 2 / 3;
    grid-row: 2 / 4;
    /* Typography */
    /* Visual */
  }
`;

export const Schedule = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 2;
  grid-row: 2 / 3;
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

export const Procedures = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    /* Typography */
    /* Visual */
  }
`;

export const Title = styled.h2`
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

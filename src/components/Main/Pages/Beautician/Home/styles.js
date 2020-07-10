import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* (Box-model) */
  margin: 20px auto;
  height: inherit;
  max-width: 1200px;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Reponsive */
  @media (max-width: 768px) {
    width: 90vw;
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
    grid-row-gap: 20px;
  }
`;

export const Profile = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  /* Responsive */
  @media (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    margin: 20px 0px;
  }
  @media (max-width: 375px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    margin-top: 0;
    margin-bottom: 20px;
  }
`;

export const Agenda = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  /* Responsive */
  @media (max-width: 768px) {
    grid-row: 1 / 3;
  }
  @media (max-width: 375px) {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
  }
`;

export const Schedule = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
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

export const Procedures = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  /* Responsive */
  @media (max-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  @media (max-width: 375px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
`;

export const Title = styled.h2`
  display: none;
  /* Responsive */
  @media (max-width: 375px) {
    display: block;
    margin: 20px 0;
    text-align: center;
  }
`;

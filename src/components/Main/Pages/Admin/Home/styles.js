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
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    width: 85vw;
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
    /* Typography */
    /* Visual */
    /* Misc */
  }
`;

export const Container = styled.div`
  /* Positioning */
  /* Box-model */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    grid-template-columns: 1fr 1fr;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    align-items: center;
    /* Typography */
    /* Visual */
  }
`;
export const Clients = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    grid-row: 1 / 2;
    /* Typography */
    /* Visual */
  }
`;
export const Beautician = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  /* Typography */
  /* Visual */
  /* Responsive */
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
export const Users = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    /* Typography */
    /* Visual */
  }
`;

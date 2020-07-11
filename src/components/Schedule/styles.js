import styled from "styled-components";

export const Week = styled.div`
  /* Positioning */
  /* Box-model */
  display: grid;
  grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
  grid-template-columns: 100px repeat(${({ columns }) => columns}, 1fr);
  grid-gap: 10px;
  margin-top: 20px;
  padding: 0 20px;
  width: 100%;
  /* Typography */
  text-align: center;
  /* Visual */
  border: 5px solid #de18ad;
  border-radius: 20px;
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    grid-template-columns: repeat(8, 65px);
    margin-bottom: 30px;
    width: 85vw;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    display: none;
    /* Typography */
    /* Misc */
    /* Visual */
  }
`;

export const Title = styled.h2`
  /* Positioning */
  /* Box-model */
  margin: 10px 0;
  /* Typography */
  /* Misc */
  /* Visual */
  /* Responsive */
`;

export const InputContainer = styled.div`
  /* Positioning */
  /* Box-model */
  display: none;
  /* Typography */
  /* Misc */
  /* Visual */
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    display: block;
    /* Typography */
    /* Misc */
    /* Visual */
  }
  div {
    /* Positioning */
    /* Box-model */
    display: flex;
    justify-content: space-between;
    /* Typography */
    /* Misc */
    /* Visual */
    /* Responsive */
  }
`;

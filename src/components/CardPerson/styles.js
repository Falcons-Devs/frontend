import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Person = styled.section`
  /* Positioning */
  /* Box-model */
  width: 500px;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  border: 5px solid #de18ad;
  border-radius: 20px;
  padding: 10px 40px;
  font-family: "Lato", sans-serif;
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    width: 350px;
    /* Typography */
    /* Visual */
    /* Misc */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    display: grid;
    grid-template-columns: 250px 50px;
    grid-template-rows: 75px;
    margin-bottom: 10px;
    padding: 10px 15px;
    width: 325px;
    /* Typography */
    /* Visual */
    border-width: 1px;
    /* Misc */
    /* Responsive */
  }
`;

export const PersonName = styled.section`
  /* Positioning */
  /* Box-model */
  display: flex;
  align-items: center;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    margin-right: 20px;
    /* Typography */
    /* Visual */
    /* Misc */
  }

  div {
    /* Positioning */
    /* Box-model */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Typography */
    /* Visual */
    /* Misc */
    /* Responsive */
  }
  input {
    /* Positioning */
    /* Box-model */
    padding: 7px 0px;
    margin-left: 10px;
    width: 100%;
    /* Typography */
    text-align: center;
    outline: none;
    /* Visual */
    border: 1px solid #02b3b1;
    border-radius: 10px;
    /* Misc */
    /* Responsive */
    @media (max-width: 768px) {
      /* Positioning */
      /* Box-model */
      /* Typography */
      font-size: 22px;
      /* Visual */
      /* Misc */
    }
    @media (max-width: 375px) {
      /* Positioning */
      /* Box-model */
      /* Typography */
      font-size: 18px;
      /* Visual */
      border: none;
      /* Misc */
    }
  }
`;

export const Information = styled.section`
  div {
    /* Positioning */
    /* Box-model */
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    /* Typography */
    /* Visual */
    /* Misc */
    /* Responsive */
    @media (max-width: 768px) {
      /* Positioning */
      /* Box-model */
      flex-direction: column;
      /* Typography */
      /* Visual */
      /* Misc */
    }
    @media (max-width: 375px) {
      /* Positioning */
      /* Box-model */
      display: none;
      /* Typography */
      /* Visual */
      /* Misc */
    }
  }

  label[for="duration"] {
    /* Positioning */
    /* Box-model */
    margin-left: 10px;
    /* Typography */
    /* Visual */
    /* Misc */
    /* Responsive */
  }
  /* Responsive */
  @media (max-width: 768px) {
    label {
      /* Positioning */
      /* Box-model */
      display: none;
      /* Typography */
      /* Visual */
      /* Misc */
    }
  }

  input {
    /* Positioning */
    /* Box-model */
    padding: 7px 0px;
    margin-left: 10px;
    /* Typography */
    outline: none;
    /* Visual */
    border: 1px solid #02b3b1;
    border-radius: 10px;
    /* Misc */
    /* Responsive */
    text-align: center;
    width: 100%;
    /* Responsive */
    @media (max-width: 768px) {
      /* Positioning */
      /* Box-model */
      margin: 10px 0;
      /* Typography */
      font-size: 18px;
      /* Visual */
      /* Misc */
    }
  }
`;

export const Link = styled(LinkRouter)`
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    /* Typography */
    /* Visual */
    /* Misc */
  }
`;

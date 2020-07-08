import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Person = styled.section`
  width: 500px;
  border: 5px solid #de18ad;
  border-radius: 20px;
  padding: 10px 40px;
  font-family: "Lato", sans-serif;
  /* Responsive */
  @media (max-width: 768px) {
    width: 350px;
  }
  @media (max-width: 375px) {
    border-width: 1px;
    display: grid;
    grid-template-columns: 225px 50px;
    grid-template-rows: 75px;
    margin-bottom: 10px;
  }
`;

export const PersonName = styled.section`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }
  input {
    outline: none;
    border: 1px solid #02b3b1;
    border-radius: 10px;
    padding: 7px 0px;
    margin-left: 10px;
    text-align: center;
    width: 100%;
    /* Responsive */
    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
  @media (max-width: 375px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    margin-right: 20px;
  }
`;

export const Information = styled.section`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    /* Responsive */
    @media (max-width: 768px) {
      flex-direction: column;
    }
    @media (max-width: 375px) {
      display: none;
    }
  }

  label[for="duration"] {
    margin-left: 10px;
  }
  /* Responsive */
  @media (max-width: 768px) {
    label {
      display: none;
    }
  }

  input {
    outline: none;
    border: 1px solid #02b3b1;
    border-radius: 10px;
    padding: 7px 0px;
    margin-left: 10px;
    text-align: center;
    width: 100%;
    /* Responsive */
    @media (max-width: 768px) {
      margin: 10px 0;
      font-size: 18px;
    }
  }
`;

export const Link = styled(LinkRouter)`
  /* Responsive */
  @media (max-width: 375px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

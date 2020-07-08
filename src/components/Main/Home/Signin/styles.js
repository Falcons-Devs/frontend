import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* (Box-model) */
  margin: 20px auto;
  height: 500px;
  width: 1200px;
  max-width: 1200px;
  display: grid;
  justify-content: center;
  align-content: center;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    width: 90vw;
    height: 550px;
  }
  @media (max-width: 375px) {
    margin-top: 10px;
    height: 500px;
  }
`;

export const SectionForm = styled.section`
  width: 500px;
  border: 5px solid #de18ad;
  border-radius: 20px;
  padding: 30px 60px;
  font-family: "Lato", sans-serif;
  @media (max-width: 768px) {
    border-width: 10px;
  }
  @media (max-width: 375px) {
    width: 100vw;
    border: none;
    padding: 15px 10px;
  }
  h2 {
    text-align: center;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      font-size: 48px;
    }
    @media (max-width: 375px) {
      font-size: 32px;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div:last-child {
    display: flex;
    justify-content: center;
    p {
      margin-right: 10px;
      @media (max-width: 768px) {
        font-size: 20px;
      }
    }
  }

  input {
    outline: none;
    border: 1px solid #02b3b1;
    border-radius: 10px;
    padding: 7px 0px;
    text-align: center;
    width: 80%;
    @media (max-width: 768px) {
      font-size: 24px;
      margin: 20px 0;
    }

    &::placeholder {
      color: rgba(47, 47, 47, 0.5);
    }
  }

  button {
    color: #fcfcfc;
    display: flex;
    font-size: 1.5em;
    background-color: #de18ad;
    padding: 8px 50px;
    border-radius: 50px;
    margin: 30px auto;
  }
`;

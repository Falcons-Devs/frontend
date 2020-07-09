import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* (Box-model) */
  margin: 20px auto;
  height: 500px;
  max-width: 1200px;
  display: grid;
  justify-content: center;
  align-items: center;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    width: 90vw;
  }
  @media (max-width: 375px) {
    margin-top: 10px;
    height: 400px;
  }
`;

export const SectionForm = styled.section`
  max-width: 500px;
  border: 5px solid #de18ad;
  border-radius: 20px;
  padding: 30px 60px;
  font-family: "Lato", sans-serif;
  @media (max-width: 768px) {
    width: 600px;
    border-width: 3px;
    padding: 15px 30px;
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
      margin-bottom: 5px;
      font-size: 1.5em;
    }
    @media (max-width: 375px) {
      font-size: 32px;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 375px) {
      justify-content: space-around;
    }
  }

  div:last-child {
    display: flex;
    justify-content: center;
    @media (max-width: 375px) {
      font-size: 16px;
    }
    a {
      color: #de18ad;
    }
  }

  input {
    border: 1px solid #02b3b1;
    border-radius: 10px;
    padding: 2px 0px;
    text-align: center;
    width: 90%;

    &::placeholder {
      color: rgba(47, 47, 47, 0.5);
    }
    @media (max-width: 768px) {
      font-size: 18px;
      margin: 10px 0;
    }
    @media (max-width: 375px) {
      font-size: 18px;
      width: 70%;
    }
  }
`;

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
    height: calc(100vh - 200px);
  }
`;

export const SectionForm = styled.section`
  width: 500px;
  border: 5px solid #de18ad;
  border-radius: 20px;
  padding: 30px 60px;
  font-family: "Lato", sans-serif;
  @media (max-width: 768px) {
    width: 600px;
    border-width: 10px;
  }
  h2 {
    text-align: center;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      font-size: 48px;
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
    a {
      color: #de18ad;
    }
  }

  input {
    outline: none;
    border: 1px solid #02b3b1;
    border-radius: 10px;
    padding: 7px 0px;
    text-align: center;
    width: 80%;

    &::placeholder {
      color: rgba(47, 47, 47, 0.5);
    }
    @media (max-width: 768px) {
      font-size: 24px;
      margin: 20px 0;
    }
  }
`;

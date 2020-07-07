import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* (Box-model) */
  margin: 20px auto;
  height: inherit;
  width: 1200px;
  max-width: 1200px;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(1fr, 4);
`;
export const Main = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`;
export const Hero = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;
export const Form = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
export const CancelButton = styled.div`
  grid-column: 1 / 2;
  grid-row: 4 / 5;
`;
export const ConfirmButton = styled.div`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
`;

export const SectionForm = styled.section`
  width: 50%;
  border: 5px solid #de18ad;
  border-radius: 20px;
  padding: 30px 60px;
  font-family: "Lato", sans-serif;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  }
`;

export const Title = styled.h2`
  margin-top: 20px;
  width: 100%;
  border-top: 5px solid #de18ad;
  text-align: center;
`;

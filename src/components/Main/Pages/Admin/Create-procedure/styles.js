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
    /* Positioning */
    /* Box-model */
    width: 90vw;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    margin: 10px 0;
    width: 100vw;
    /* Typography */
    /* Visual */
  }
`;

export const Container = styled.div`
  /* Positioning */
  /* Box-model */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(1fr, 4);
  /* Typography */
  /* Visual */
  /* Responsive */
`;
export const Main = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  /* Typography */
  /* Visual */
  /* Responsive */
`;
export const Hero = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  /* Typography */
  /* Visual */
  /* Responsive */
`;
export const Form = styled.div`
  /* Positioning */
  /* Box-model */
  display: flex;
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  justify-content: center;
  margin-top: 20px;
  /* Typography */
  /* Visual */
  /* Responsive */
`;
export const CancelButton = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  /* Typography */
  /* Visual */
  /* Responsive */
`;
export const ConfirmButton = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  /* Typography */
  /* Visual */
  /* Responsive */
`;

export const SectionForm = styled.section`
  /* Positioning */
  /* Box-model */
  padding: 30px 60px;
  width: 50%;
  /* Typography */
  font-family: "Lato", sans-serif;
  /* Visual */
  border: 5px solid #de18ad;
  border-radius: 20px;
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    width: 75vw;
    /* Typography */
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    padding: 10px 20px;
    /* Typography */
    /* Visual */
    border-width: 1px;
  }

  h2 {
    /* Positioning */
    /* Box-model */
    margin-bottom: 20px;
    /* Typography */
    text-align: center;
    /* Visual */
    /* Responsive */
  }

  div {
    /* Positioning */
    /* Box-model */
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* Typography */
    /* Visual */
    /* Responsive */
    @media (max-width: 768px) {
      margin: 20px 0;
    }
  }

  input {
    /* Positioning */
    /* Box-model */
    padding: 7px 0px;
    width: 80%;
    /* Typography */
    text-align: center;
    outline: none;
    /* Visual */
    border: 1px solid #02b3b1;
    border-radius: 10px;
    /* Responsive */

    &::placeholder {
      /* Positioning */
      /* Box-model */
      color: rgba(47, 47, 47, 0.5);
      /* Typography */
      /* Visual */
      /* Responsive */
      @media (max-width: 768px) {
        /* Positioning */
        /* Box-model */
        /* Typography */
        font-size: 18px;
        /* Visual */
        /* Responsive */
      }
    }
  }
`;

export const Title = styled.h2`
  /* Positioning */
  /* Box-model */
  margin-top: 20px;
  width: 100%;
  /* Typography */
  text-align: center;
  /* Visual */
  border-top: 5px solid #de18ad;
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    margin-top: 30px;
    /* Typography */
    font-size: 32px;
    /* Visual */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    display: none;
    /* Typography */
    /* Visual */
  }
`;

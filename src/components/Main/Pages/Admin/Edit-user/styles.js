import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* Box-model */
  margin: 20px auto;
  padding: 0px 20px;
  width: 1200px;
  max-width: 1200px;
  /* Typography */
  /* Visual */
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
    padding: 0;
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
  /* Misc */
  /* Responsive */
`;
export const SectionForm = styled.section`
  /* Positioning */
  /* Box-model */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 75px 50px;
  padding: 30px 60px;
  margin-block-end: 20px;
  width: 50%;
  /* Typography */
  font-family: "Lato", sans-serif;
  /* Visual */
  border: 5px solid #de18ad;
  border-radius: 20px;
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    width: 75vw;
    /* Typography */
    /* Visual */
    /* Misc */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    width: 90vw;
    padding: 30px 10px;
    /* Typography */
    /* Visual */
    border-width: 3px;
    /* Misc */
  }

  h2 {
    /* Positioning */
    /* Box-model */
    margin: 20px 0;
    /* Typography */
    text-align: center;
    /* Visual */
    /* Misc */
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
    /* Misc */
    /* Responsive */
  }

  input,
  select {
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
    /* Misc */
    /* Responsive */
    @media (max-width: 768px) {
      /* Positioning */
      /* Box-model */
      margin: 20px 0;
      /* Typography */
      /* Visual */
      /* Misc */
    }
    @media (max-width: 375px) {
      /* Positioning */
      /* Box-model */
      width: 90%;
      /* Typography */
      /* Visual */
      /* Misc */
    }
    &::placeholder {
      /* Positioning */
      /* Box-model */
      /* Typography */
      /* Visual */
      color: rgba(47, 47, 47, 0.5);
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
    }
  }
  select {
    /* Positioning */
    /* Box-model */
    /* Typography */
    color: rgba(47, 47, 47, 0.5);
    /* Visual */
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
  }
`;

export const InputContainer = styled.form`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
`;

export const Title = styled.h2`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  margin-top: 20px;
  width: 100%;
  /* Typography */
  text-align: center;
  /* Visual */
  border-top: 5px solid #de18ad;
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    /* Typography */
    font-size: 32px;
    /* Visual */
    /* Misc */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    /* Typography */
    font-size: 23px;
    /* Visual */
    border-width: 3px;
    /* Misc */
    /* Responsive */
  }
`;

export const CancelButton = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
`;
export const CreateButton = styled.div`
  /* Positioning */
  /* Box-model */
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
`;

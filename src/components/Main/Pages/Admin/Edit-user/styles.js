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
  justify-content: center;
  margin-top: 20px;
  grid-column: 1 / 3;
  grid-row: 3 / 4;
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
export const CreateButton = styled.div`
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
  border: 5px solid #de18ad;
  border-radius: 20px;
  padding: 30px 60px;
  width: 50%;
  /* Typography */
  font-family: "Lato", sans-serif;
  /* Visual */
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
    padding: 10px 15px;
    width: 80vw;
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
  }

  input,
  select {
    /* Positioning */
    /* Box-model */
    padding: 7px 0px;
    width: 80%;
    /* Typography */
    border: 1px solid #02b3b1;
    text-align: center;
    border-radius: 10px;
    outline: none;
    /* Visual */
    /* Responsive */
    @media (max-width: 768px) {
      /* Positioning */
      /* Box-model */
      margin: 20px 0;
      /* Typography */
      /* Visual */
    }
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
        font-size: 22px;
        /* Visual */
      }
    }
  }
  select {
    /* Positioning */
    /* Box-model */
    color: rgba(47, 47, 47, 0.5);
    /* Typography */
    /* Visual */
    /* Responsive */
    @media (max-width: 768px) {
      /* Positioning */
      /* Box-model */
      font-size: 22px;
      /* Typography */
      /* Visual */
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
    /* Responsive */
  }
`;

import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* Box-model */
  display: grid;
  align-content: center;
  justify-content: center;
  margin: 20px auto;
  max-width: 1200px;
  height: 500px;
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
    /* Misc */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    margin-top: 10px;
    height: 500px;
    /* Typography */
    /* Visual */
    /* Misc */
  }
`;

export const SectionForm = styled.section`
  /* Positioning */
  /* Box-model */
  padding: 30px 60px;
  width: 500px;
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
    padding: 15px 30px;
    /* Typography */
    /* Visual */
    border-width: 3px;
    /* Misc */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    padding: 15px 10px;
    width: 100vw;
    /* Typography */
    /* Visual */
    border: none;
    /* Misc */
  }
  h2 {
    /* Positioning */
    /* Box-model */
    margin-bottom: 20px;
    /* Typography */
    text-align: center;
    /* Visual */
    /* Misc */
    /* Responsive */
    @media (max-width: 768px) {
      /* Positioning */
      /* Box-model */
      margin-bottom: 5px;
      /* Typography */
      font-size: 1.5em;
      /* Visual */
      /* Misc */
    }
    @media (max-width: 375px) {
      /* Positioning */
      /* Box-model */
      /* Typography */
      font-size: 32px;
      /* Visual */
      /* Misc */
    }
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
    @media (max-width: 375px) {
      /* Positioning */
      /* Box-model */
      justify-content: space-around;
      /* Typography */
      /* Visual */
      /* Misc */
    }
  }

  div:last-child {
    /* Positioning */
    /* Box-model */
    display: flex;
    justify-content: center;
    /* Typography */
    /* Visual */
    /* Misc */
    /* Responsive */
    p {
      /* Positioning */
      /* Box-model */
      margin-right: 10px;
      /* Typography */
      /* Visual */
      /* Misc */
      /* Responsive */
      @media (max-width: 768px) {
        /* Positioning */
        /* Box-model */
        /* Typography */
        font-size: 20px;
        /* Visual */
        /* Misc */
      }
    }
  }

  input {
    /* Positioning */
    /* Box-model */
    padding: 7px 0px;
    width: 90%;
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
      margin: 10px 0;
      padding: 2px 0px;
      /* Typography */
      font-size: 18px;
      /* Visual */
      /* Misc */
    }

    &::placeholder {
      /* Positioning */
      /* Box-model */
      /* Typography */
      color: rgba(47, 47, 47, 0.5);
      /* Visual */
      /* Misc */
    }
  }
`;

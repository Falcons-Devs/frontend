import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* Box-model */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  padding: 0px 20px;
  margin: 20px auto;
  max-width: 1200px;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1fr, 3);
    width: 90vw;
    /* Typography */
    /* Visual */
    /* Misc */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    padding: 0;
    /* Typography */
    /* Visual */
    /* Misc */
  }
`;

export const SectionAbout = styled.section`
  /* Positioning */
  /* Box-model */
  width: 95%;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    padding-right: 30px;
    /* Typography */
    /* Visual */
    /* Misc */
  }

  h3 {
    /* Positioning */
    /* Box-model */
    margin-bottom: 20px;
    /* Typography */
    font-size: 2em;
    /* Visual */
    /* Misc */
    /* Responsive */
    @media (max-width: 768px) {
      /* Positioning */
      /* Box-model */
      /* Typography */
      font-size: 36px;
      /* Visual */
      /* Misc */
    }
    @media (max-width: 375px) {
      /* Positioning */
      /* Box-model */
      margin-bottom: 0;
      /* Typography */
      /* Visual */
      /* Misc */
    }
  }

  p {
    /* Positioning */
    /* Box-model */
    margin-bottom: 20px;
    /* Typography */
    text-align: justify;
    /* Visual */
    line-height: 25px;
    /* Misc */
    /* Responsive */
    @media (max-width: 768px) {
      /* Positioning */
      /* Box-model */
      /* Typography */
      font-size: 18px;
      /* Visual */
      /* Misc */
    }
    @media (max-width: 375px) {
      /* Positioning */
      /* Box-model */
      margin-bottom: 0;
      /* Typography */
      /* Visual */
      /* Misc */
    }
  }
`;

export const SectionMembers = styled.section`
  /* Positioning */
  /* Box-model */
  /* Typography */
  color: #2f2f2f;
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    width: 90%;
    /* Typography */
    /* Visual */
    /* Misc */
  }

  h3 {
    /* Positioning */
    /* Box-model */
    margin-bottom: 20px;
    /* Typography */
    font-size: 2em;
    /* Visual */
    /* Misc */
    /* Responsive */
  }

  span {
    /* Positioning */
    position: absolute;
    /* Box-model */
    margin: -10px 0 0 -10px;
    /* Typography */
    /* Visual */
    /* Misc */
    /* Responsive */
  }

  div#name {
    /* Positioning */
    /* Box-model */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-left: 80px;
    width: 87%;
    /* Typography */
    /* Visual */
    border-bottom: 1px solid #02b3b1;
    /* Misc */
    /* Responsive */
    @media (max-width: 375px) {
      /* Positioning */
      /* Box-model */
      justify-content: space-evenly;
      width: 77%;
      /* Typography */
      /* Visual */
      /* Misc */
    }

    div {
      /* Positioning */
      /* Box-model */
      width: 20px;
      height: 20px;
      /* Typography */
      /* Visual */
      background-color: #c4c4c4;
      border-radius: 50%;
      /* Misc */
      /* Responsive */
    }
  }

  p#project {
    /* Positioning */
    /* Box-model */
    margin-top: 10px;
    /* Typography */
    text-align: center;
    /* Visual */
    /* Misc */
    /* Responsive */
  }
`;

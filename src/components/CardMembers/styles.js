import styled from "styled-components";

export const Article = styled.article`
  article {
    /* Positioning */
    position: relative;
    /* Box-model */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    margin-bottom: 20px;
    padding: 10px;
    height: 93px;
    /* Typography */
    /* Visual */
    border: 1px solid #02b3b1;
    border-radius: 200px;
    /* Misc */
    /* Responsive */
    div {
      p {
        @media (max-width: 375px) {
          /* Positioning */
          /* Box-model */
          display: none;
          /* Typography */
          /* Visual */
          /* Misc */
          /* Responsive */
        }
      }
    }
  }
  h2 {
    /* Positioning */
    /* Box-model */
    display: none;
    /* Typography */
    /* Visual */
    /* Misc */
    /* Responsive */
    @media (max-width: 375px) {
      /* Positioning */
      /* Box-model */
      display: block;
      margin: 5px 0;
      /* Typography */
      font-size: 18px;
      /* Visual */
      /* Misc */
    }
  }
`;

export const Image = styled.img`
  /* Positioning */
  /* Box-model */
  margin-left: 10px;
  margin-top: 10px;
  width: 90px;
  height: 90px;
  /* Typography */
  /* Visual */
  border-radius: 200px;
  /* Misc */
  /* Responsive */
`;

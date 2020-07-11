import styled from "styled-components";

export const FooterStyle = styled.footer`
  /* Positioning */
  position: absolute;
  bottom: -50;
  /* Box-model */
  height: inherit;
  width: 100%;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    /* Typography */
    /* Visual */
    background: #02b3b1;
    /* Misc */
  }
`;

export const Wrap = styled.div`
  /* Positioning */
  /* Box-model */
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  height: 60px;
  max-width: 1200px;
  /* Typography */
  /* Visual */
  background: #02b3b1;
  border-radius: 10px 10px 0 0;
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    max-width: 90vw;
    /* Typography */
    /* Visual */
    /* Misc */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    width: 100vw;
    height: 140px;
    /* Typography */
    font-size: 24px;
    /* Visual */
    border-radius: 0;
    /* Misc */
    /* Responsive */
  }
`;

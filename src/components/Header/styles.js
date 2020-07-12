import styled from "styled-components";

export const HeaderStyle = styled.header`
  /* Positioning */
  position: sticky;
  top: 0;
  /* Box-model */
  height: 100px;
  /* Typography */
  /* Visual */
  background: #02b3b1;
  /* Misc */
  z-index: 100;

  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    height: 85px;
    /* Typography */
    /* Visual */
    /* Misc */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    width: 375px;
    height: 75px;
    /* Typography */
    /* Visual */
    /* Misc */
  }
`;

export const Wrap = styled.div`
  /* Positioning */
  /* Box-model */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  max-width: 1200px;
  height: inherit;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    justify-content: space-between;
    padding: 0;
    width: 90vw;
    /* Typography */
    /* Visual */
    /* Misc */
  }
`;

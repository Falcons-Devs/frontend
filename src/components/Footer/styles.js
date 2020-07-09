import styled from "styled-components";

export const FooterStyle = styled.footer`
  /* Positioning */
  position: absolute;
  bottom: 0;
  /* Box-model */
  height: inherit;
  width: 100%;
  /* Typography */
  /* Visual */
  /* Misc */

  @media (max-width: 375px) {
    background: #02b3b1;
  }
`;

export const Wrap = styled.div`
  /* Positioning */
  /* (Box-model) */
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
    max-width: 90vw;
  }
  /* Responsive */
  @media (max-width: 375px) {
    width: 100vw;
    border-radius: 0;
    height: 150px;
    font-size: 24px;
  }
`;

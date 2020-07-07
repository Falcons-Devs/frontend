import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* (Box-model) */
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  height: 60px;
  width: 1200px;
  max-width: 1200px;
  /* Typography */
  /* Visual */
  background: #02b3b1;
  border-radius: 10px 10px 0 0;
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const FooterStyle = styled.footer`
  /* Positioning */
  /* Box-model */
  height: inherit;
  width: 100%;
  /* Typography */
  /* Visual */
  /* Misc */
`;

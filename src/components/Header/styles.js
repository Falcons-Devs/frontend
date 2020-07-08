import styled from "styled-components";

export const HeaderStyle = styled.header`
  /* Positioning */
  position: sticky;
  top: 0;
  /* (Box-model) */
  height: 100px;
  /* Typography */
  /* Visual */
  background: #02b3b1;
  /* Misc */
  z-index: 999999;

  @media (max-width: 375px) {
    width: 375px;
    height: 75px;
  }
`;

export const Wrap = styled.div`
  /* Positioning */
  /* (Box-model) */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  height: inherit;
  width: 1200px;
  max-width: 1200px;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    width: 90vw;
    padding: 0;
    justify-content: space-between;
  }
`;

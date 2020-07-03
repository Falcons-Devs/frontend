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
`;

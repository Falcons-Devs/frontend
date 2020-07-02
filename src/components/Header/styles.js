import styled from "styled-components";

export const HeaderStyle = styled.header`
  /* Posicionamiento */
  position: sticky;
  top: 0;
  /* Modelo de caja (Box-model) */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  height: 100px;
  /* Tipografía */
  /* Visual */
  background: #02b3b1;
  /* Misc */
  z-index: 999999;
`;

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
  height: 62px;
  /* Tipografía */
  /* Visual */
  background: #fff;
  border-bottom: 1px solid #d8d8d8;
  /* Misc */
  z-index: 999999;
`;

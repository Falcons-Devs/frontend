import styled from "styled-components";

export const Week = styled.div`
  /* Positioning */
  /* Box-model */
  display: grid;
  grid-template-rows: repeat(16, 1fr);
  grid-template-columns: 100px repeat(7, 1fr);
  grid-gap: 10px;
  margin-top: 20px;
  padding: 0 20px;
  width: 100%;
  /* Typography */
  text-align: center;
  /* Visual */
  border: 5px solid #de18ad;
  border-radius: 20px;
  /* Misc */
`;

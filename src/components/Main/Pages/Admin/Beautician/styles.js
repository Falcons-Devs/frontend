import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* (Box-model) */
  margin: 20px auto;
  width: 1200px;
  max-width: 1200px;
  padding: 0px 20px;
  /* Typography */
  /* Visual */
  /* Responsive */
  @media (max-width: 768px) {
    width: 90vw;
  }
  @media (max-width: 375px) {
    margin: 10px 0;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  align-items: center;
  justify-content: center;
  @media (max-width: 375px) {
    width: 90vw;
  }
`;
export const ArrowButton = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  @media (max-width: 375px) {
    display: none;
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

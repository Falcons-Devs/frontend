import styled from "styled-components";

export const Wrap = styled.div`
  /* Positioning */
  /* (Box-model) */
  margin: 20px auto;
  width: 1200px;
  max-width: 1200px;
  display: grid;
  padding: 0px 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    width: 90vw;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1fr, 3);
  }
`;

export const SectionAbout = styled.section`
  h3 {
    font-size: 2em;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }

  p {
    margin-bottom: 20px;
    text-align: justify;
    line-height: 25px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const SectionMembers = styled.section`
  color: #2f2f2f;

  h3 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  span {
    position: absolute;
    margin: -10px 0px 0px -10px;
  }

  div#name {
    width: 87%;
    margin-left: 80px;
    border-bottom: 1px solid #02b3b1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    div {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #c4c4c4;
    }
  }

  p#project {
    margin-top: 10px;
    text-align: center;
  }
`;

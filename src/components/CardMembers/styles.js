import styled from "styled-components";

export const Article = styled.article`
  article {
    position: relative;
    height: 93px;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #02b3b1;
    border-radius: 200px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const Image = styled.img`
  margin-left: 10px;
  margin-top: 10px;
  width: 90px;
  height: 90px;
  border-radius: 200px;
`;

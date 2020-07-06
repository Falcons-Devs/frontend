import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Image = styled.div`
  position: relative;
  width: ${(props) => props.widthImage || "300px"};

  img {
    height: ${(props) => props.heightImage || "368px"};
    width: 100%;
  }

  p {
  }
`;

export const Link = styled(LinkRouter)`
  position: absolute;
  bottom: 4px;
  left: 0;
  width: 100%;
  padding: 20px 0;
  border-radius: 0 0 35px 35px;
  background-color: rgba(252, 252, 252, 0.9);
  color: #de18ad;
  text-align: center;
`;

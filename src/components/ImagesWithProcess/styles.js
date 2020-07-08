import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Link = styled(LinkRouter)`
  /* Positioning */
  /* Box-model */
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "368px"};
  /* Typography */
  outline: none;
  /* Visual */
  background-image: url('${(props) => props.cover}');
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #B0B0B0;
  background-size: cover;
  border-radius: 69px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
  color: #fff;
  display: block;
  overflow: hidden;
  position: relative;
  transition: background-color .2s cubic-bezier(0.4, 0, 0.2, 1),box-shadow .3s cubic-bezier(0.4, 0, 0.2, 1),color .2s cubic-bezier(0.4, 0, 0.2, 1),fill .2s cubic-bezier(0.4, 0, 0.2, 1);
  /* Misc */
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 300px;
    height: 368px;
    border-radius: 20px;
    margin-bottom: 30px;
    height: ${(props) => (props.responsivetablet ? "184px" : "")};
  }
  /* Responsive */
  @media (max-width: 375px) {
    width: 150px;
    border-radius: 5px;
  }
  &:hover {
    box-shadow: 0 4px 5px rgba(0,0,0,0.4);
  }
`;

export const Article = styled.article`
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* Box-model */
  /* Typography */
  /* Visual */
  /* Misc */
`;

export const Section = styled.section`
  /* Positioning */
  position: absolute;
  bottom: 0;
  /* Box-model */
  text-align: center;
  padding: 20px 10px;
  width: 100%;
  /* Typography */
  /* Visual */
  background-color: rgba(252, 252, 252, 0.9);
  /* Misc */
`;

export const H2 = styled.h2`
  /* Positioning */
  /* Box-model */
  /* Typography */
  color: #de18ad;
  font-size: 32px;
  font-weight: 300;
  line-height: 1.3;
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

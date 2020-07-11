import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Link = styled(LinkRouter)`
  /* Positioning */
  position: relative;
  overflow: hidden;
  /* Box-model */
  display: block;
  margin-bottom: 20px;
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "368px"};
  /* Typography */
  color: #fff;
  outline: none;
  /* Visual */
  background-image: url('${(props) => props.cover}');
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #B0B0B0;
  background-size: cover;
  border-radius: 69px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
  transition: background-color .2s cubic-bezier(0.4, 0, 0.2, 1),box-shadow .3s cubic-bezier(0.4, 0, 0.2, 1),color .2s cubic-bezier(0.4, 0, 0.2, 1),fill .2s cubic-bezier(0.4, 0, 0.2, 1);
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    margin-bottom: 30px;
    width: 300px;
    height: ${(props) => (props.responsivetablet ? "184px" : "")};
    /* Typography */
    /* Visual */
    border-radius: 20px;
    /* Misc */
    /* Responsive */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    width: ${(props) => (props.responsivemobile ? "300px" : "")};
    height: ${(props) => (props.responsivemobile ? "150px" : "")};
    /* Typography */
    /* Visual */
    border-radius: 5px;
    /* Misc */
  }
  &:hover {
    /* Positioning */
    /* Box-model */
    /* Typography */
    /* Visual */
    box-shadow: 0 4px 5px rgba(0,0,0,0.4);
    /* Misc */
    /* Responsive */
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
    /* Positioning */
    /* Box-model */
    /* Typography */
    font-size: 18px;
    /* Visual */
    /* Misc */
  }
`;

import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

import BackgroundParallax from "../../../assets/img/Background-parallax.jpg";

export const Wrap = styled.div`
  /* Positioning */
  /* (Box-model) */
  margin: 20px auto;
  height: inherit;
  width: 1200px;
  max-width: 1200px;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    width: 90vw;
    height: 80.5vh;
  }
`;

export const Main = styled.main`
  /* Positioning */
  /* Box-model */
  /* border: 1px solid red; */
  width: 100%;
  height: auto;
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-row-gap: 0%;
  justify-items: center;
  /* Typography */
  /* Visual */
  /* Misc */
`;

export const SectionHero = styled.section`
  /* Positioning */
  position: relative;
  /* Box-model */
  /* Typography */
  /* Visual */
  /* Misc */

  img {
    position: relative;
  }

  h1 {
    position: absolute;
    top: 38%;
    left: 8%;
    color: white;
    /* Typography */
    font-family: "Italianno", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      system-ui, sans-serif;
    font-size: 4em;
    font-weight: 400;
    color: #fff;
  }
`;

export const SectionEslogan = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lato", sans-serif;
  font-weight: normal;

  h2 {
    margin-bottom: -15px;
    color: #de18ad;
    font-family: "Italianno", cursive;
    font-size: 2.8em;
    font-weight: 400;
  }

  h3 {
    margin-bottom: 10px;
    color: #2f2f2f;
    font-size: 2em;
  }

  p {
    color: rgba(47, 47, 47, 0.7);
  }
`;

export const SectionCards = styled.section`
  margin-top: 40px;
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
`;

export const SectionParallax = styled.section`
  height: 446px;
  background: url(${BackgroundParallax});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lato", sans-serif;
  font-weight: normal;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const InfoParallax = styled.section`
  /* border: 1px solid red; */
  width: 575px;
  text-align: center;
  color: #fcfcfc;

  h4 {
    font-family: "Italianno", cursive;
    font-size: 2.6em;
    font-weight: 400;
    color: #000000;
    margin: 0px;
  }

  p {
    font-size: 1.7em;
    font-weight: 400;
    margin-bottom: 40px;
  }

  button {
    color: #fcfcfc;
    font-size: 1.5em;
    background-color: #de18ad;
    padding: 8px 50px;
    border-radius: 50px;
  }
`;

export const Link = styled(LinkRouter)`
  color: #fcfcfc;
  font-size: 1.5em;
  background-color: #de18ad;
  padding: 8px 50px;
  border-radius: 50px;
`;

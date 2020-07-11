import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

import BackgroundParallax from "../../../assets/img/Background-parallax.jpg";

export const Wrap = styled.div`
  /* Positioning */
  /* Box-model */
  margin: 20px auto;
  max-width: 1200px;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    margin-top: 75px;
    width: 90vw;
    /* Typography */
    /* Visual */
    /* Misc */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    margin-top: 20px;
    /* Typography */
    /* Visual */
    /* Misc */
  }
`;

export const Main = styled.main`
  /* Positioning */
  /* Box-model */
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-row-gap: 0%;
  justify-items: center;
  width: 100%;
  height: auto;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    width: 100%;
    /* Typography */
    /* Visual */
    /* Misc */
  }
  @media (max-width: 375px) {
  }
`;

export const SectionHero = styled.section`
  /* Positioning */
  position: relative;
  /* Box-model */
  /* Typography */
  /* Visual */
  /* Misc */

  img {
    /* Positioning */
    position: relative;
    /* Box-model */
    /* Typography */
    /* Visual */
    /* Misc */
    /* Responsive */
    @media (max-width: 768px) {
      /* Positioning */
      /* Box-model */
      margin-top: 20px;
      width: 100%;
      max-width: 600px;
      height: auto;
      /* Typography */
      /* Visual */
      /* Misc */
    }
  }

  h1 {
    /* Positioning */
    position: absolute;
    top: 38%;
    left: 8%;
    /* Box-model */
    /* Typography */
    /* Visual */
    color: #fff;
    font-family: "Italianno", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      system-ui, sans-serif;
    font-size: 4em;
    font-weight: 400;
    /* Misc */
    /* Responsive */
    @media (max-width: 768px) {
      /* Positioning */
      /* Box-model */
      /* Typography */
      font-size: 3em;
      /* Visual */
      /* Misc */
    }
    @media (max-width: 375px) {
      /* Positioning */
      /* Box-model */
      /* Typography */
      font-size: 32px;
      /* Visual */
      /* Misc */
    }
  }
`;

export const SectionEslogan = styled.section`
  /* Positioning */
  /* Box-model */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Typography */
  font-family: "Lato", sans-serif;
  font-weight: normal;
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    grid-row: 1 / 2;
    /* Typography */
    /* Visual */
    /* Misc */
  }
  h2 {
    /* Positioning */
    /* Box-model */
    margin-bottom: -15px;
    /* Typography */
    color: #de18ad;
    font-family: "Italianno", cursive;
    font-size: 2.8em;
    font-weight: 400;
    /* Visual */
    /* Misc */
    /* Responsive */
  }

  h3 {
    /* Positioning */
    /* Box-model */
    margin-bottom: 10px;
    /* Typography */
    color: #2f2f2f;
    font-size: 2em;
    /* Visual */
    /* Misc */
    /* Responsive */
  }

  p {
    /* Positioning */
    /* Box-model */
    /* Typography */
    color: rgba(47, 47, 47, 0.7);
    /* Visual */
    /* Misc */
    /* Responsive */
  }
`;

export const SectionCards = styled.section`
  /* Positioning */
  /* Box-model */
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  width: 100%;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    display: none;
    /* Typography */
    /* Visual */
    /* Misc */
  }

  img {
    @media (max-width: 768px) {
      /* Positioning */
      /* Box-model */
      margin-top: 20px;
      width: 100%;
      max-width: 150px;
      height: auto;
      /* Typography */
      /* Visual */
      /* Misc */
    }
  }
`;

export const SectionParallax = styled.section`
  /* Positioning */
  /* Box-model */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  height: 446px;
  /* Typography */
  font-family: "Lato", sans-serif;
  font-weight: normal;
  /* Visual */
  background: url(${BackgroundParallax});
  background-repeat: no-repeat;
  background-size: cover;
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    display: none;
    /* Typography */
    /* Visual */
    /* Misc */
  }
`;

export const InfoParallax = styled.section`
  /* Positioning */
  /* Box-model */
  width: 575px;
  /* Typography */
  color: #fcfcfc;
  text-align: center;
  /* Visual */
  /* Misc */
  /* Responsive */

  h4 {
    /* Positioning */
    /* Box-model */
    margin: 0px;
    /* Typography */
    /* Visual */
    color: #000000;
    font-family: "Italianno", cursive;
    font-size: 2.6em;
    font-weight: 400;
    /* Misc */
    /* Responsive */
  }

  p {
    /* Positioning */
    /* Box-model */
    margin-bottom: 40px;
    /* Typography */
    font-size: 1.7em;
    font-weight: 400;
    /* Visual */
    /* Misc */
    /* Responsive */
  }

  button {
    /* Positioning */
    /* Box-model */
    padding: 8px 50px;
    /* Typography */
    color: #fcfcfc;
    font-size: 1.5em;
    /* Visual */
    background-color: #de18ad;
    border-radius: 50px;
    /* Misc */
    /* Responsive */
  }
`;

export const Link = styled(LinkRouter)`
  /* Positioning */
  /* Box-model */
  padding: 8px 50px;
  /* Typography */
  color: #fcfcfc;
  font-size: 1.5em;
  /* Visual */
  background-color: #de18ad;
  border-radius: 50px;
  /* Misc */
  /* Responsive */
`;

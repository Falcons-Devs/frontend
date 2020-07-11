import styled from "styled-components";

export const Button = styled.button`
  /* Positioning */
  /* Box-model */
  display: flex;
  justify-content: center;
  padding: 8px 50px;
  margin: 30px auto;
  /* width: 90%; */
  /* Typography */
  color: #fcfcfc;
  font-size: 1.5em;
  /* Visual */
  background-color: ${(props) => props.color};
  border-radius: 50px;
  /* Misc */
  cursor: pointer;
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    width: ${(props) => (props.responsivetablet ? "125px" : "")};
    justify-content: ${(props) => (props.responsivetablet ? "center" : "")};
    /* Typography */
    font-size: ${(props) => (props.responsivetablet ? "1em" : "")};
    /* Visual */
    /* Misc */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    /* Typography */
    font-size: 18px;
    /* Visual */
    /* Misc */
    /* Responsive */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    padding: 10px 15px;
    /* Typography */
    /* Visual */
    /* Misc */
    /* Responsive */
  }
`;

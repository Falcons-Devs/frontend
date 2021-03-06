import styled from "styled-components";

import Header_1 from "../../assets/img/Background-header1.jpg";
import Header_2 from "../../assets/img/Background-header2.jpg";
import Header_3 from "../../assets/img/Background-header3.jpg";
import Header_4 from "../../assets/img/Background-header4.jpg";

export const BackgroudImages = styled.div`
  /* Positioning */
  /* Box-model */
  height: 200px;
  width: 100%;
  /* Typography */
  /* Visual */
  background: ${(props) =>
    (props.numberImg == 1 && `url(${Header_1})`) ||
    (props.numberImg == 2 && `url(${Header_2})`) ||
    (props.numberImg == 3 && `url(${Header_3})`) ||
    (props.numberImg == 4 && `url(${Header_4})`)};
  background-size: cover;
  border-radius: 20px;
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    max-width: 100%;
    height: 150px;
    /* Typography */
    /* Visual */
    /* Misc */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    display: none;
    /* Typography */
    /* Visual */
    /* Misc */
  }
`;

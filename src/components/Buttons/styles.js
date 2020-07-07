import styled from "styled-components";

export const Button = styled.button`
  color: #fcfcfc;
  display: flex;
  font-size: 1.5em;
  background-color: ${(props) => props.color};
  padding: 8px 50px;
  border-radius: 50px;
  margin: 30px auto;
  cursor: pointer;
  /* Responsive */
  width: ${(props) => (props.responsiveTablet ? "125px" : "")};
  justify-content: ${(props) => (props.responsiveTablet ? "center" : "")};
  font-size: ${(props) => (props.responsiveTablet ? "14px" : "")};
`;

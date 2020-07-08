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
  @media (max-width: 768px) {
    width: ${(props) => (props.responsivetablet ? "125px" : "")};
    justify-content: ${(props) => (props.responsivetablet ? "center" : "")};
    font-size: ${(props) => (props.responsivetablet ? "14px" : "")};
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

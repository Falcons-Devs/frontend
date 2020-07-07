import styled from "styled-components";

export const Beautician = styled.section`
  width: 500px;
  border: 5px solid #de18ad;
  border-radius: 20px;
  padding: 10px 40px;
  font-family: "Lato", sans-serif;
`;

export const BeauticianName = styled.section`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }
  input {
    outline: none;
    border: 1px solid #02b3b1;
    border-radius: 10px;
    padding: 7px 0px;
    margin-left: 10px;
    text-align: center;
    width: 100%;
  }
`;

export const Information = styled.section`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  label[for="duration"] {
    margin-left: 10px;
  }

  input {
    outline: none;
    border: 1px solid #02b3b1;
    border-radius: 10px;
    padding: 7px 0px;
    margin-left: 10px;
    text-align: center;
    width: 100%;
  }
`;

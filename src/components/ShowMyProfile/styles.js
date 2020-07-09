import styled from "styled-components";

export const MyProfile = styled.section`
  width: 500px;
  border: 5px solid #de18ad;
  border-radius: 20px;
  padding: 30px 40px;
  font-family: "Lato", sans-serif;
  /* Responsive */
  @media (max-width: 768px) {
    width: 600px;
    border-width: 3px;
  }
  @media (max-width: 375px) {
    padding: 10px 10px;
    width: 350px;
    border-width: 1px;
  }
`;

export const Profile = styled.section`
  display: flex;
  align-items: center;

  div {
    display: flex;
    /* border: 1px solid red; */
    flex-direction: column;
  }
  /* Responsive */
  @media (max-width: 375px) {
    display: none;
  }
`;

export const NextAppointment = styled.section`
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
    /* Responsive */
    @media (max-width: 375px) {
      display: none;
    }
  }
  h4 {
    /* Responsive */
    @media (max-width: 375px) {
      font-size: 32px;
      margin: 0;
    }
  }
`;

export const NameClient = styled.section`
  display: flex;
  align-items: center;
`;

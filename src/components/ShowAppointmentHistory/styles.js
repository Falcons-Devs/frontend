import styled from "styled-components";

export const MyProfile = styled.section`
  width: 500px;
  border: 5px solid #de18ad;
  border-radius: 20px;
  padding: 30px 40px;
  font-family: "Lato", sans-serif;
  @media (max-width: 768px) {
    width: 350px;
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
  }
`;

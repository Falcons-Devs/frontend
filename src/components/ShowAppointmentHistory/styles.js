import styled from "styled-components";

export const MyProfile = styled.section`
  width: 500px;
  border: 5px solid #de18ad;
  border-radius: 20px;
  padding: 30px 20px;
  font-family: "Lato", sans-serif;
  @media (max-width: 768px) {
    width: 350px;
  }
  @media (max-width: 375px) {
    border-width: 3px;
    width: 100%;
  }
`;

export const Profile = styled.section`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const NextAppointment = styled.section`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    @media (max-width: 354px) {
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  input {
    border: 1px solid #02b3b1;
    border-radius: 10px;
    padding: 7px 0px;
    /* margin-left: 10px; */
    text-align: center;
    resize: vertical;

    &.cost,
    &.hous {
      width: 20%;
    }
  }
`;

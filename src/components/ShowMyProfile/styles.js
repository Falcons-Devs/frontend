import styled from "styled-components";

export const MyProfile = styled.section`
  /* Positioning */
  /* Box-model */
  padding: 30px 40px;
  width: 500px;
  /* Typography */
  font-family: "Lato", sans-serif;
  /* Visual */
  border: 5px solid #de18ad;
  border-radius: 20px;
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    border-width: 3px;
    width: 600px;
    /* Typography */
    /* Visual */
    /* Misc */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    padding: 10px 10px;
    width: 85vw;
    /* Typography */
    /* Visual */
    border-width: 1px;
    /* Misc */
  }
`;

export const Profile = styled.section`
  /* Positioning */
  /* Box-model */
  display: flex;
  align-items: center;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */

  div {
    /* Positioning */
    /* Box-model */
    display: flex;
    flex-direction: column;
    /* Typography */
    /* Visual */
    /* Misc */
    /* Responsive */
  }
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    display: none;
    /* Typography */
    /* Visual */
    /* Misc */
  }
`;

export const NextAppointment = styled.section`
  div {
    /* Positioning */
    /* Box-model */
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    /* Typography */
    /* Visual */
    /* Misc */
    /* Responsive */
  }

  label[for="duration"] {
    /* Positioning */
    /* Box-model */
    margin-left: 10px;
    /* Typography */
    /* Visual */
    /* Misc */
    /* Responsive */
  }

  input {
    /* Positioning */
    /* Box-model */
    padding: 7px 0px;
    margin-left: 10px;
    width: 100%;
    /* Typography */
    text-align: center;
    outline: none;
    /* Visual */
    border: 1px solid #02b3b1;
    border-radius: 10px;
    /* Misc */
    /* Responsive */
    @media (max-width: 375px) {
      /* Positioning */
      /* Box-model */
      display: none;
      /* Typography */
      /* Visual */
      /* Misc */
      /* Responsive */
    }
  }
  h4 {
    /* Responsive */
    @media (max-width: 375px) {
      /* Positioning */
      /* Box-model */
      margin: 0;
      /* Typography */
      font-size: 32px;
      /* Visual */
      /* Misc */
    }
  }
`;

export const NameClient = styled.section`
  /* Positioning */
  /* Box-model */
  display: flex;
  align-items: center;
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
`;

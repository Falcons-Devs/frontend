import styled from "styled-components";

export const MyProfile = styled.section`
  /* Positioning */
  /* Box-model */
  padding: 30px 20px;
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
    width: 350px;
    /* Typography */
    /* Visual */
    /* Misc */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    width: 100%;
    /* Typography */
    /* Visual */
    border-width: 3px;
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
    @media (max-width: 354px) {
      /* Positioning */
      /* Box-model */
      flex-wrap: wrap;
      justify-content: center;
      /* Typography */
      /* Visual */
      /* Misc */
    }
  }

  input {
    /* Positioning */
    /* Box-model */
    padding: 7px 0px;
    /* Typography */
    text-align: center;
    /* Visual */
    border: 1px solid #02b3b1;
    border-radius: 10px;
    /* Misc */
    resize: vertical;
    /* Responsive */

    &.cost,
    &.hous {
      /* Positioning */
      /* Box-model */
      width: 20%;
      /* Typography */
      /* Visual */
      /* Misc */
      /* Responsive */
    }
  }
`;

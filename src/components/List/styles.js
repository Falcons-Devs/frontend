import styled from "styled-components";

export const Container = styled.div`
  /* Positioning */
  /* Box-model */
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 30px 40px;
  width: 100%;
  /* Typography */
  /* Visual */
  border: 5px solid #de18ad;
  border-radius: 20px;
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    width: 85vw;
    /* Typography */
    /* Visual */
    /* Misc */
  }
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    flex-direction: column;
    width: 90vw;
    /* Typography */
    /* Visual */
    border: none;
    /* Misc */
  }
`;

export const ProcedureContainer = styled.div`
  /* Positioning */
  /* Box-model */
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: ${(props) => (props.full ? "100%" : "33.3%")};
  /* Typography */
  /* Visual */
  /* Misc */
  /* Responsive */
  @media (max-width: 375px) {
    /* Positioning */
    /* Box-model */
    width: 100%;
    /* Typography */
    /* Visual */
    /* Misc */
  }
`;

export const P = styled.p`
  /* Positioning */
  /* Box-model */
  /* Typography */
  font-size: 24px;
  /* Visual */
  /* Misc */
  /* Responsive */
`;

export const Title = styled.h2`
  /* Positioning */
  /* Box-model */
  margin-top: 20px;
  width: 100%;
  /* Typography */
  text-align: center;
  /* Visual */
  border-top: 5px solid #de18ad;
  /* Misc */
  /* Responsive */
`;

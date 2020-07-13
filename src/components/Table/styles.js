import styled from "styled-components";

export const Table = styled.table`
  /* Positioning */
  /* Box-model */
  width: 100%;
  /* Typography */
  /* Visual */
  border: 6px solid #de18ad;
  border-collapse: collapse;
  vertical-align: top;
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    /* Positioning */
    /* Box-model */
    width: 88vw;
    /* Typography */
    /* Visual */
    /* Misc */
    /* Responsive */
  }

  th,
  td {
    /* Positioning */
    /* Box-model */
    /* Typography */
    text-align: left;
    /* Visual */
    border: 4px solid #de18ad;
    border-spacing: 0;
    line-height: 50px;
    vertical-align: top;
    /* Misc */
    /* Responsive */
  }

  th {
    /* Positioning */
    /* Box-model */
    /* Typography */
    text-align: center;
    /* Visual */
    /* Misc */
    /* Responsive */
  }

  td {
    /* Positioning */
    /* Box-model */
    /* Typography */
    text-align: center;
    /* Visual */
    /* Misc */
    /* Responsive */
  }
  td[colspan] {
    /* Positioning */
    /* Box-model */
    /* Typography */
    font-weight: 900;
    text-align: center;
    /* Visual */
    /* Misc */
    /* Responsive */
  }
`;

export const Delete = styled.div`
  cursor: pointer;
  width: 50px;
  margin: 0 auto;
`;

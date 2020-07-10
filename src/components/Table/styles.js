import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border: 6px solid #de18ad;
  border-collapse: collapse;
  vertical-align: top;
  /* Responsive */
  @media (max-width: 768px) {
    width: 88vw;
  }

  th,
  td {
    line-height: 50px;
    text-align: left;
    vertical-align: top;
    border: 4px solid #de18ad;
    border-spacing: 0;
  }

  th {
    text-align: center;
  }

  td {
    text-align: left;
  }
  td[colspan] {
    text-align: center;
    font-weight: 900;
  }
`;

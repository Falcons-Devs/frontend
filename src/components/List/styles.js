import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  border: 5px solid #de18ad;
  border-radius: 20px;
  padding: 30px 40px;
  display: flex;
  flex-wrap: wrap;
`;

export const ProcedureContainer = styled.div`
  width: ${(props) => (props.full ? "100%" : "33.3%")};
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export const P = styled.p`
  font-size: 24px;
`;

export const Title = styled.h2`
  margin-top: 20px;
  width: 100%;
  border-top: 5px solid #de18ad;
  text-align: center;
`;

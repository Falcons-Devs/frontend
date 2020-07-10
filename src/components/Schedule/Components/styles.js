import styled from "styled-components";

export const NameOfTheDayStyle = styled.div`
  /* Positioning */
  /* Box-model */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* Typography */
  font-size: 28px;
  /* Visual */
  /* Misc */
`;

export const DayNumberStyle = styled.div`
  /* Positioning */
  /* Box-model */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* Typography */
  font-size: 32px;
  /* Visual */
  border-bottom: 5px solid #de18ad;
  /* Misc */
  /* Responsive */
`;

export const SelectedDayNumberStyle = styled.div`
  /* Positioning */
  /* Box-model */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* Typography */
  font-size: 32px;
  color: #de18ad;
  /* Visual */
  border-top: 2px solid #de18ad;
  border-bottom: 5px solid #de18ad;
  border-radius: 14px;
  /* Misc */
  /* Responsive */
`;

export const TimeOfDayStyle = styled.div`
  /* Positioning */
  /* Box-model */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* Typography */
  font-size: 20px;
  /* Visual */
  /* Misc */
`;

export const SummaryOfTheAppointmentStyle = styled.div`
  /* Positioning */
  /* Box-model */
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 6px;
  width: 100%;
  height: 38px;
  /* Typography */
  color: #fff;
  font-size: 20px;
  /* Visual */
  background-color: #066665;
  border-radius: 10px;
  /* Misc */
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.4);
  }
`;

export const Name = styled.div`
  /* Positioning */
  /* Box-model */
  display: block;
  width: 100%;
  height: 100%;
  /* Typography */
  /* Visual */
  overflow: hidden;
  /* Misc */
  /* Responsive */
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MonthAndYearStyle = styled.div`
  /* Positioning */
  /* Box-model */
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1 / ${({ columns }) => columns + 2};
  width: 100%;
  height: 100%;
  /* Typography */
  font-size: 32px;
  /* Visual */
  border-top: 5px solid #de18ad;
  /* Misc */
`;

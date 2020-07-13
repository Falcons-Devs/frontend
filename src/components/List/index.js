import React from "react";

// Import the icons components
import { IconCheckboxFalse } from "../../assets/static/icon-checkbox-false";

// Import presentational components of styled components
import { Container, ProcedureContainer, P, Title } from "./styles";

export const List = ({ list, listFull, title, full, topic, onChange }) => {
  return (
    <Container id={topic}>
      {listFull[0].map((item) => {
        if (item.active === 1) {
          return (
            <ProcedureContainer key={item.id}>
              <P>
                {topic === "Beautician"
                  ? item.name_stylist
                  : item.name_procedure}
              </P>
              <input
                type={topic === "Beautician" ? "radio" : "checkbox"}
                value={
                  topic === "Beautician"
                    ? item.name_stylist
                    : item.name_procedure
                }
                id={item.id}
                name={
                  topic === "Beautician"
                    ? "radioBeautician"
                    : "checkboxProcedure"
                }
                onChange={onChange}
              />
            </ProcedureContainer>
          );
        } else {
          return "";
        }
      })}
      <Title>{title}</Title>
    </Container>
  );
};

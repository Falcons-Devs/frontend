import React from "react";
import { mount } from "enzyme";
import { CardInformation } from "../../components/CardInformation";
import { Container } from "../../components/CardInformation/styles";

import { name, procedures } from "../../__mocks__/CardInformation";

describe("<CardInformation />", () => {
  test("Component Card Information Rendering", () => {
    const card = mount(
      <CardInformation>
        <Container>
          <h3>{name}</h3>
          <h4>Descripcion</h4>
          {procedures.map((procedure, index) => (
            <p key={index}>{procedure}</p>
          ))}
        </Container>
      </CardInformation>
    );
    expect(card.length).toEqual(1);
  });
});

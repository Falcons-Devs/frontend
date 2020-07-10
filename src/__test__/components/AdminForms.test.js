import React from "react";
import { mount } from "enzyme";

import { AdminForms } from "../../components/AdminForms";
import { IconEmail } from "../../assets/static/icon-email";
import { IconPassword } from "../../assets/static/icon-password";
import { IconAccountCircle } from "../../assets/static/icon-accountCircle";
import { IconType } from "../../assets/static/icon-type";
import { Buttons } from "../../components/Buttons";
import { IconPrice } from "../../assets/static/icon-price";
import { IconDuration } from "../../assets/static/icon-duration";
import {
  Form,
  SectionForm,
  Title,
  CancelButton,
  CreateButton,
  InputContainer,
} from "../../components/AdminForms/styles";

describe("<AdminForms />", () => {
  test("Render of AdminForms component", () => {
    const adminForms = mount(<AdminForms />);
    expect(adminForms.length).toEqual(1);
  });
});

describe("<IconEmail />", () => {
  test("Render of IconEmail component", () => {
    const iconEmail = mount(<IconEmail />);
    expect(iconEmail.length).toEqual(1);
  });
});

describe("<IconPassword />", () => {
  test("Render of IconPassword component", () => {
    const iconPassword = mount(<IconPassword />);
    expect(iconPassword.length).toEqual(1);
  });
});

describe("<IconAccountCircle />", () => {
  test("Render of IconAccountCircle component", () => {
    const iconAccountCircle = mount(<IconAccountCircle />);
    expect(iconAccountCircle.length).toEqual(1);
  });
});

describe("<IconType />", () => {
  test("Render of IconType component", () => {
    const iconType = mount(<IconType />);
    expect(iconType.length).toEqual(1);
  });
});

describe("<Buttons />", () => {
  test("Render of Buttons component", () => {
    const buttons = mount(<Buttons />);
    expect(buttons.length).toEqual(1);
  });
});

describe("<IconPrice />", () => {
  test("Render of IconPrice component", () => {
    const iconPrice = mount(<IconPrice />);
    expect(iconPrice.length).toEqual(1);
  });
});

describe("<IconDuration />", () => {
  test("Render of IconDuration component", () => {
    const iconDuration = mount(<IconDuration />);
    expect(iconDuration.length).toEqual(1);
  });
});

describe("<Form />", () => {
  test("Render of the style component Form", () => {
    const form = mount(<Form />);
    expect(form.length).toEqual(1);
  });
});

describe("<SectionForm />", () => {
  test("Render of the style component SectionForm", () => {
    const sectionForm = mount(<SectionForm />);
    expect(sectionForm.length).toEqual(1);
  });
});

describe("<Title />", () => {
  test("Render of the style component Title", () => {
    const title = mount(<Title />);
    expect(title.length).toEqual(1);
  });
});

describe("<CancelButton />", () => {
  test("Render of the style component CancelButton", () => {
    const cancelButton = mount(<CancelButton />);
    expect(cancelButton.length).toEqual(1);
  });
});

describe("<CreateButton />", () => {
  test("Render of the style component CreateButton", () => {
    const createButton = mount(<CreateButton />);
    expect(createButton.length).toEqual(1);
  });
});

describe("<InputContainer />", () => {
  test("Render of the style component InputContainer", () => {
    const inputContainer = mount(<InputContainer />);
    expect(inputContainer.length).toEqual(1);
  });
});

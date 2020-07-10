import React from "react";
import { mount } from "enzyme";

import { CardMembers } from "../../components/CardMembers";
import { IconGitHub } from "../../assets/static/icon-github";
import { IconLinkedIn } from "../../assets/static/icon-linkedin";
import { IconTwitter } from "../../assets/static/icon-twitter";
import { Article, Image } from "../../components/CardMembers/styles";

import { img } from "../../__mocks__/Image";

describe("<CardMembers />", () => {
  test("Render of CardMembers component", () => {
    const cardMembers = mount(<CardMembers />);
    expect(cardMembers.length).toEqual(1);
  });
});

describe("<IconGitHub />", () => {
  test("Render of IconGitHub component", () => {
    const iconGitHub = mount(<IconGitHub />);
    expect(iconGitHub.length).toEqual(1);
  });
});

describe("<IconLinkedIn />", () => {
  test("Render of IconLinkedIn component", () => {
    const iconLinkedIn = mount(<IconLinkedIn />);
    expect(iconLinkedIn.length).toEqual(1);
  });
});

describe("<IconTwitter />", () => {
  test("Render of IconTwitter component", () => {
    const iconTwitter = mount(<IconTwitter />);
    expect(iconTwitter.length).toEqual(1);
  });
});

describe("<Article />", () => {
  test("Render of the style component Article", () => {
    const article = mount(<Article />);
    expect(article.length).toEqual(1);
  });
});

describe("<Image />", () => {
  test("Render of the style component Image", () => {
    const image = mount(<Image src={img} />);
    expect(image.length).toEqual(1);
  });
});

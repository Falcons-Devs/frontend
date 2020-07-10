import React from "react";
import { mount } from "enzyme";

import { ImagesWithProcess } from "../../components/ImagesWithProcess";
import {
  Link,
  Article,
  Section,
  H2,
} from "../../components/ImagesWithProcess/styles";

import {
  nameImage,
  alt,
  width,
  height,
  to,
  responsivetablet,
  responsivemobile,
} from "../../__mocks__/imageWithProcess";

describe("<ImagesWithProcess />", () => {
  test("Render of ImagesWithProcess component", () => {
    const imagesWithProcess = mount(
      <ImagesWithProcess
        nameImage={nameImage}
        alt={alt}
        width={width}
        height={height}
        to={to}
        responsivetablet={responsivetablet}
        responsivemobile={responsivemobile}
      />
    );
    expect(imagesWithProcess.length).toEqual(1);
  });
});

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
  cover,
  to,
  alt,
  width,
  height,
  responsivetablet,
  responsivemobile,
} from "../../__mocks__/Link";

describe("<ImagesWithProcess />", () => {
  test("Render of ImagesWithProcess component", () => {
    const imagesWithProcess = mount(
      <ImagesWithProcess>
        <Link
          cover={cover}
          to={to}
          aria-label={alt}
          width={width}
          height={height}
          responsivetablet={responsivetablet}
          responsivemobile={responsivemobile}
        >
          <Article>
            <Section>
              <H2>{alt}</H2>
            </Section>
          </Article>
        </Link>
      </ImagesWithProcess>
    );
    expect(imagesWithProcess.length).toEqual(1);
  });
});

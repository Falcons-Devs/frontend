import React from "react";
import { mount } from "enzyme";

import { Footer } from "../../components/Footer";
import { Social } from "../../components/Footer/Social";
import { NavBarFooter } from "../../components/Footer/NavBar";
import { Ul, Li, Anchor } from "../../components/Footer/Social/styles";
import { FooterStyle, Wrap } from "../../components/Footer/styles";
import { IconGitHub } from "../../assets/static/icon-github";
import { Nav, Link, P } from "../../components/Footer/NavBar/styles";

describe("<Footer />", () => {
  test("Component Footer Rendering", () => {
    const footer = mount(
      <Footer>
        <FooterStyle>
          <Wrap>
            <NavBarFooter />
          </Wrap>
        </FooterStyle>
      </Footer>
    );
    expect(footer.length).toEqual(1);
  });
});

describe("<Social />", () => {
  test("Component Social Rendering", () => {
    const social = mount(
      <Social>
        <Ul>
          <Li>
            <Anchor
              href="https://github.com/Falcons-Devs"
              target="_blank"
              aria-label="GitHub de Falcons Devs"
            >
              <IconGitHub height="20px" />
            </Anchor>
          </Li>
        </Ul>
      </Social>
    );
    expect(social.length).toEqual(1);
  });
});

describe("<NavBarFooter />", () => {
  const navbar = mount(
    <NavBarFooter>
      <Nav>
        <Link to="/terms">Terminos y condiciones</Link>
        <Link to="/notice">Aviso de privacidad</Link>
        <P>Copiryght © 2020</P>
      </Nav>
    </NavBarFooter>
  );
  test("Component NavbarFooter Rendering", () => {
    expect(navbar.length).toEqual(1);
  });
});

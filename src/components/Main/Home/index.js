import React from "react";
import {
  Main,
  Wrap,
  SectionHero,
  SectionEslogan,
  SectionCards,
  SectionParallax,
  InfoParallax,
  Link,
} from "./styles";

import Hero from "../../../assets/img/hero.jpg";
import Hero_card1 from "../../../assets/img/hero_card1.jpg";
import Hero_card2 from "../../../assets/img/hero_card2.jpg";
import Hero_card3 from "../../../assets/img/hero_card3.jpg";
import { Buttons } from "../../Buttons";

export const Home = () => (
  <>
    <Wrap>
      <Main>
        <SectionHero>
          <img src={Hero} alt="Foto de Mujer creado por freepik" />
          <h1>One Click Style</h1>
        </SectionHero>
        <SectionEslogan>
          <h2>Bienvenido a nuestro</h2>
          <h3>Sitio Web</h3>
          <p>Agenda citas, administralas y todo en un click</p>
        </SectionEslogan>
        <SectionCards>
          <img src={Hero_card1} alt="Foto de Verano creado por halayalex" />
          <img src={Hero_card2} alt="Foto de Mujer creado por freepik " />
          <img src={Hero_card3} alt="Foto de Moda creado por halayalex" />
        </SectionCards>
      </Main>
    </Wrap>
    <SectionParallax>
      <InfoParallax>
        <input type="hidden" value="Foto de Marco creado por freepik" />
        <h4>Agenda tu primera cita</h4>
        <p>
          Te sorprenderás con lo fácil y rapido que es agendar una cita con tu
          esteticista favorita y tu procedimiento favorito
        </p>
        <Buttons vaue="Registrarse" to="/signin" />
      </InfoParallax>
    </SectionParallax>
  </>
);

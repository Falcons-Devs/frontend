import React, { useEffect } from "react";
import LogoFalconsDevs from "../../../../assets/img/Logo_Falcons_Devs.jpg";
import { Wrap, SectionAbout, SectionMembers } from "./styles";
import { CardMembers } from "../../../CardMembers";

import ErickMata from "../../../../assets/img/erick-mata.jpg";
import ByronPiedrahita from "../../../../assets/img/byron-piedrahita.png";
import JhonColorado from "../../../../assets/img/jhon-colorado.jpg";
import ErnestoLazaro from "../../../../assets/img/ernesto-lazaro.png";
import HectorMartinez from "../../../../assets/img/hector-martinez.jpg";

export const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <SectionAbout>
        <article>
          <h3>Nosotros</h3>
          <p>
            “OCS: One Click Style” es nuestro proyecto final de graduación en
            Platzi Master. Trabajamos durante dos semanas desde su analisis,
            diseño, desarrollo e implementación.
          </p>
          <p>
            Estamos orgullosos del producto realizado y nos motiva a seguir
            aprendiendo y contruyendo cosas increibles.
          </p>
          <p>Gracias por visitar One Click Style.</p>
        </article>
        <article>
          <h3>Equipo</h3>
          <img src={LogoFalconsDevs} alt="Falcons Devs" />
          <p>
            Falcons Devs es el nombre de nuestro equipo, el halcon destaca por
            su vision y conocimiento. Estos dos atributos son claves para el
            desarollo del proyecto y por eso lo elegimos para ser nuestro animal
            representativo.
          </p>
        </article>
      </SectionAbout>
      <SectionMembers>
        <h3>Integrantes</h3>
        <CardMembers
          nameMember="Erick Daniel Pérez Mata"
          position="Project Manager"
          img={ErickMata}
          github="https://github.com/Erickowski"
          linkedin="https://www.linkedin.com/in/erick-mata/"
          twitter="https://twitter.com/Erickowski"
        />
        <CardMembers
          nameMember="Byron Miguel Piedrahita Hernandez"
          position="Backend Developer"
          img={ByronPiedrahita}
          github="https://github.com/ByronPiedrahita"
          linkedin="http://www.linkedin.com/in/byron-miguel-piedrahita-hernandez-2b96b4a2"
        />
        <CardMembers
          nameMember="Jhon Carlos Colorado Angulo"
          position="Frontend Developer"
          img={JhonColorado}
          github="https://github.com/jcolorado19"
          linkedin="https://www.linkedin.com/in/jhon-carlos-colorado-angulo-6aa134b9"
          twitter="https://twitter.com/JhonColorado07"
        />
        <CardMembers
          nameMember="Héctor Martínez Reséndiz"
          position="Frontend Developer"
          img={HectorMartinez}
          github="https://github.com/HectorMartinezResendiz"
          linkedin="https://www.linkedin.com/in/h%C3%A9ctor-mart%C3%ADnez-32b2621ab/"
          twitter="https://twitter.com/HectorMR206"
        />
        <CardMembers
          nameMember="Ernesto Lázaro Guerrero"
          position="UI Designer"
          img={ErnestoLazaro}
          github="https://github.com/ErnestoLazaro"
          linkedin="https://www.linkedin.com/in/ernesto-lazaro/"
          twitter="https://twitter.com/FTonEnergiasA"
        />
      </SectionMembers>
    </Wrap>
  );
};

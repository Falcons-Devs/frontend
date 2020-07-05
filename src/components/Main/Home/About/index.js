import React from "react";
import LogoFalconsDevs from "../../../../assets/img/Logo_Falcons_Devs.jpg";
import { IconAccountCircle } from "../../../../assets/static/icon-accountCircle";

import { Wrap, SectionAbout, SectionMembers } from "./styles";
import { CardMembers } from "../../../CardMembers";

export const About = () => {
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
        />
        <CardMembers
          nameMember="Byron Miguel Piedrahita Hernandez"
          position="Backend Developer"
        />
        <CardMembers
          nameMember="Jhon Carlos Colorado Angulo"
          position="Frontend Developers"
        />
        <CardMembers
          nameMember="Héctor Martínez Reséndiz"
          position="Frontend Developers"
        />
        <CardMembers
          nameMember="Ernesto Lázaro Guerrero"
          position="UI Designer"
        />
      </SectionMembers>
    </Wrap>
  );
};
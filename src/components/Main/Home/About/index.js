import React from 'react';
import LogoFalconsDevs from '../../../../assets/img/Logo_Falcons_Devs.jpg';
import { IconAccountCircle } from '../../../../assets/static/icon-accountCircle';

import { Wrap, SectionAbout, SectionMembers } from './styles';

export const About = () => {
    return (
        <Wrap>
            <SectionAbout>
                <article>
                    <h3>Nosotros</h3>
                    <p>“OCS: One Click Style” es nuestro proyecto final de graduación en Platzi Master. Trabajamos durante dos semanas desde su analisis, diseño, desarrollo e implementación.</p>
                    <p>Estamos orgullosos del producto realizado y nos motiva a seguir aprendiendo y contruyendo cosas increibles.</p>
                    <p>Gracias por visitar One Click Style.</p>
                </article>
                <article>
                    <h3>Equipo</h3>
                    <img src={LogoFalconsDevs} alt="Falcons Devs"/>
                    <p>Falcons Devs es el nombre de nuestro equipo, el halcon destaca por su vision y conocimiento. Estos dos atributos son claves para el desarollo del proyecto y por eso lo elegimos para ser nuestro animal representativo.</p>
                </article>
            </SectionAbout>
            <SectionMembers>
                <h3>Integrantes</h3>
                <article>
                    <span><IconAccountCircle width="110px" height="110px" fill="#DE18AD"/></span>
                    <div id="name">
                        <p>Erick Daniel Pérez Mata</p>
                        <div></div>
                    </div>
                    <p id="project">Project Manager</p>
                </article>
                <article>
                    <span><IconAccountCircle width="110px" height="110px" fill="#DE18AD"/></span>
                    <div id="name">
                        <p>Byron Miguel Piedrahita Hernandez</p>
                        <div></div>
                    </div>
                    <p id="project">Backend Developer</p>
                </article>
                <article>
                    <span><IconAccountCircle width="110px" height="110px" fill="#DE18AD"/></span>
                    <div id="name">
                        <p>Jhon Carlos Colorado Angulo</p>
                        <div></div>
                    </div>
                    <p id="project">Frontend Developers</p>
                </article>
                <article>
                    <span><IconAccountCircle width="110px" height="110px" fill="#DE18AD"/></span>
                    <div id="name">
                        <p>Héctor Martínez Reséndiz</p>
                        <div></div>
                    </div>
                    <p id="project">Frontend Developers</p>
                </article>
                <article>
                    <span><IconAccountCircle width="110px" height="110px" fill="#DE18AD"/></span>
                    <div id="name">
                        <p>Ernesto Lázaro Guerrero</p>
                        <div></div>
                    </div>
                    <p id="project">UI Designer</p>
                </article>
            </SectionMembers>
        </Wrap>
    )
}

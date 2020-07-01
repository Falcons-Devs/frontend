import React from "react";
import { IconGitHub } from "../../../assets/static/icon-github";
import { Ul, Li, Anchor } from "./styles";

export const Social = () => (
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
);

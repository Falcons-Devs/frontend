import React from "react";

import Client_1 from "../../assets/img/Background-client1.jpg";

import Hero_card1 from "../../assets/img/hero_card1.jpg";
import Hero_card2 from "../../assets/img/hero_card2.jpg";
import Hero_card3 from "../../assets/img/hero_card3.jpg";
import Hero_card4 from "../../assets/img/hero_card4.jpg";
import { Link, Article, Section, H2 } from "./styles";

export const ImagesWithProcess = ({ nameImage, alt, width, height, to }) => {
  let cover;
  nameImage == 1 ? (cover = Hero_card1) : "";
  nameImage == 2 ? (cover = Hero_card2) : "";
  nameImage == 3 ? (cover = Hero_card3) : "";
  nameImage == 4 ? (cover = Hero_card4) : "";
  nameImage == 5 ? (cover = Client_1) : "";
  return (
    <Link cover={cover} to={to} aria-label={alt} width={width} height={height}>
      <Article>
        <Section>
          <H2>{alt}</H2>
        </Section>
      </Article>
    </Link>
  );
};

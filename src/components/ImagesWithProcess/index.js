import React from "react";

import Hero_card1 from "../../assets/img/hero_card1.jpg";
import Hero_card2 from "../../assets/img/hero_card2.jpg";
import Hero_card3 from "../../assets/img/hero_card3.jpg";
import Hero_card4 from "../../assets/img/hero_card4.jpg";
import { Image, Link } from "./styles";

export const ImagesWithProcess = ({ nameImage, alt, width, height, to }) => {
  return (
    <Image widthImage={width} heightImage={height}>
      {nameImage == 1 && <img src={Hero_card1} alt={alt} />}
      {nameImage == 2 && <img src={Hero_card2} alt={alt} />}
      {nameImage == 3 && <img src={Hero_card3} alt={alt} />}
      {nameImage == 4 && <img src={Hero_card4} alt={alt} />}
      <Link to={to}> {alt} </Link>
    </Image>
  );
};

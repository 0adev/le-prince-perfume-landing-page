import React from "react";
import {
  Lacoste,
  Boss,
  Dior,
  Paco,
  Ysl,
  Versace,
  Montblanc,
  Dg,
  Hermes,
  Armani,
  Jpg,
} from "./index";
import "./brand.css";

const Brand = () => {
  return (
    <div className="princedlf__brands" data-aos="zoom-in">
      <div className="princedlf__brands-slider">
        <div className="item item1">
          <img src={Lacoste} alt="" />
        </div>
        <div className="item item2">
          <img src={Boss} alt="" />
        </div>
        <div className="item item3 text-center">
          <img src={Dior} alt="" />
        </div>
        <div className="item item4 text-center">
          <img src={Paco} alt="" />
        </div>
        <div className="item item5 text-center">
          <img src={Ysl} alt="" />
        </div>
        <div className="item item6 text-center">
          <img src={Versace} alt="" />
        </div>
        <div className="item item7 text-center">
          <img src={Montblanc} alt="" />
        </div>
        <div className="item item8 text-center">
          <img src={Dg} alt="" />
        </div>
        <div className="item item9 text-center">
          <img src={Hermes} alt="" />
        </div>
        <div className="item item10 text-center">
          <img src={Armani} alt="" />
        </div>
        <div className="item item11 text-center">
          <img src={Jpg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brand;

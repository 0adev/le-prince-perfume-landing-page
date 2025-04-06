import React from "react";
import "./header.css";
import heroGlow from "../../assets/hero-glow.svg";
import arrowSvg from "../../assets/arrow-down.svg";

const Header = () => {
  return (
    <div className="princedlf__header section__margin">
      <div className="princedlf__header-container d-grid place-items-center grid-auto-flow-column h-100 mx-auto--my-0 py-3">
        <div className="first-column w-100 h-100 d-grid place-items-end">
          <div className="image"></div>
        </div>
        <div className="second-column">
          <div className="first-copy d-grid place-items-center gap-7">
            <h1 className="primary-heading fw-bold text-primary text-center text-wrap">
              <img src={heroGlow} alt="" />
              خلي كلشي يتفكرك غير برشة من PRINCE
            </h1>
            <p className="text-primary text-center text-balance fs-2 fw-semibold">
              مرحبا بك في عالم الجمال و الأناقة نقدم لكم عطورنا الفاخرة التي
              تجمع بين الرقي و التميز لتستمتع بتجربة استثنائية
            </p>
            <a
              href="#order"
              className="primary-btn | text-deco text-light fs-1 fw-medium bg-dark border-none padding-3 b-r-rounded cursor-pointer transition"
            >
              اطلب عطرك المفضل الان
            </a>
          </div>
          <div className="second-copy d-grid place-items-center gap-9">
            <h2 className="secondary-ff fw-medium">أطلق العنان للجوهر</h2>
            <div className="scroll-down">
              <img src={arrowSvg} alt="" />
            </div>
          </div>
        </div>
        <div className="last-column d-grid place-items-start justify-content-sb w-100 h-100">
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

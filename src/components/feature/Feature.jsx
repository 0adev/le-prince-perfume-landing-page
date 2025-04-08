import React from "react";
import "./feature.css";

function Feature({ image, icon, title, paragraph }) {
  return (
    <div className="princedlf-feature">
      <div className="princedlf__feature-container d-grid gap-8">
        <div className="princedlf__feature-container-image position-relative">
          <img src={image} alt="" />
          <img src={icon} alt="icon" className="position-absolute" />
        </div>
        <div className="princedlf__feature-content d-grid gap-3 ">
          <h3 className="title marhey-ff fw-semibold fs-4 text-red">{title}</h3>
          <p className="fs-3 fw-semibold text-balance">{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default Feature;

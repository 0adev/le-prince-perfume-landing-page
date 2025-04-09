import React from "react";
import "./sectionHeader.css";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <div
      className="princedlf__sectionHeader d-grid place-items-center gap-4 text-center translateY-0"
      data-aos="fade-down"
    >
      <div className="fs-2 fw-semibold text-orange">{title}</div>
      <h2 className="fs-8 text-primary fw-semibold">{subTitle}</h2>
    </div>
  );
};

export default SectionHeader;

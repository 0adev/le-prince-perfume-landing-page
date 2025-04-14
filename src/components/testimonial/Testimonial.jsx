import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import "./testimonial.css";

const Testimonial = ({ image, name, content }) => {
  return (
    <>
      <div className="princedlf__testimonial-header d-flex justify-content-sp align-items-center gap-2">
        <img src={image} alt="Customer Profile" width={50} />
        <RiDoubleQuotesR size={22} color="#000" />
      </div>
      <div className="princedlf__testimonial-name d-grid gap-1 place-content-start">
        <h3>{name}</h3>
        <div className="rating">⭐ ⭐ ⭐ ⭐ ⭐</div>
      </div>
      <div className="princedlf__testimonial-content">
        <p>{content}</p>
      </div>
    </>
  );
};

export default Testimonial;

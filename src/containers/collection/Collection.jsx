// import React, { useState } from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import "./collection.css";
import { MenCollectionImage, WomenCollectionImage, ArrowSvg } from ".";

const Collection = () => {
  // const [showMenCollection, setShowMenCollection] = useState(false);

  return (
    <div className="princedlf__collection section__margin">
      <SectionHeader title={"قائمة العطور"} subTitle={"استمتع بأرقى الروائح"} />
      <div className="princedlf__collection-container d-flex justify-content-center align-items-center gap-7">
        {/* <!-- men collection --> */}
        <div className="men position-relative" data-aos="fade-left">
          <div className="container position-relative o-hidden w-100">
            <div className="card-cover">
              <img src={MenCollectionImage} alt="" />
            </div>
            <div className="card-content w-100">
              <h3 className="fs-6 fw-medium secondary-ff text-light text-nowrap position-absolute top-0">
                عطور رجالية
              </h3>
              <a
                href="#MenCollection"
                className="text-light fw-medium fs-2 text-deco position-absolute d-flex gap-2"
                // onClick={() => setShowMenCollection(true)}
              >
                قائمة العطور <img src={ArrowSvg} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* <!-- women collection --> */}
        <div className="women" data-aos="fade-right">
          <div className="container position-relative o-hidden w-100">
            <div className="card-cover">
              <img src={WomenCollectionImage} alt="" />
            </div>
            <div className="card-content w-100">
              <h3 className="fs-10 fw-medium secondary-ff text-primary text-nowrap position-absolute top-0">
                عطور نسائية
              </h3>
              <a
                href="#"
                className="text-light fw-medium fs-2 text-deco position-absolute d-flex gap-2"
              >
                قائمة العطور <img src={ArrowSvg} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* {showMenCollection && (
        <div className="princedlf__collection-container">HH</div>
      )} */}
    </div>
  );
};

export default Collection;

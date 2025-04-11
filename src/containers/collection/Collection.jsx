import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import "./collection.css";
import {
  MenCollectionImage,
  WomenCollectionImage,
  ArrowSvg,
  MenCatalog,
  WomenCatalog,
} from ".";

const Collection = () => {
  const [showMenCollection, setShowMenCollection] = useState(false);
  const [showWomenCollection, setShowWomenCollection] = useState(false);
  // const [closeCatalog, setCloseCtalog] = useState(true);

  return (
    <div className="princedlf__collection section__margin" id="collection">
      <SectionHeader title={"قائمة العطور"} subTitle={"استمتع بأرقى الروائح"} />
      <div className="princedlf__collection-container d-flex justify-content-center align-items-center gap-7 position-relative">
        {showMenCollection && (
          <div className="men-catalog position-absolute z-999">
            <div className="men-catalog-container">
              <button onClick={() => setShowMenCollection(false)}>
                <RiCloseLine size={27} />
              </button>
              <img src={MenCatalog} alt="" />
            </div>
          </div>
        )}
        {showWomenCollection && (
          <div className="women-catalog position-absolute z-999">
            <div className="women-catalog-container">
              <button onClick={() => setShowWomenCollection(false)}>
                <RiCloseLine size={27} />
              </button>
              <img src={WomenCatalog} alt="" />
            </div>
          </div>
        )}
        {/* <!-- men collection --> */}
        <div className="men position-relative" data-aos="fade-up">
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
                onClick={() => setShowMenCollection(true)}
              >
                قائمة العطور <img src={ArrowSvg} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* <!-- women collection --> */}
        <div className="women" data-aos="fade-down">
          <div className="container position-relative o-hidden w-100">
            <div className="card-cover">
              <img src={WomenCollectionImage} alt="" />
            </div>
            <div className="card-content w-100">
              <h3 className="fs-10 fw-medium secondary-ff text-primary text-nowrap position-absolute top-0">
                عطور نسائية
              </h3>
              <a
                href="#WomenCollection"
                className="text-light fw-medium fs-2 text-deco position-absolute d-flex gap-2"
                onClick={() => setShowWomenCollection(true)}
              >
                قائمة العطور <img src={ArrowSvg} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

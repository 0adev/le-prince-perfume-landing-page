import "./header.css";
import { heroGlow, arrowSvg, star, customerOne, customerTwo } from "./index";
import CtaButton from "../../components/ctaButton/CtaButton";

const Header = () => {
  return (
    <div className="princedlf__header" id="header">
      <CtaButton />
      <div className="princedlf__header-container d-grid place-items-center grid-auto-flow-column h-100 mx-auto--my-0 py-3">
        <div
          className="first-column w-100 h-100 d-grid place-items-end"
          data-aos="fade-left"
        >
          <div className="image">
            <p className="d-grid place-items-start-center gap-2 text-center text-balance fw-regular fs-1 marhey-ff padding-3">
              <img src={star} alt="" width={30} />
              ثباتية عالية تدوم طوال اليوم
            </p>
          </div>
        </div>
        <div className="second-column" data-aos="zoom-out">
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
        <div
          className="last-column d-grid place-items-start justify-content-sb w-100 h-100"
          data-aos="fade-right"
        >
          <div className="image position-relative">
            <div className="customers position-absolute d-flex align-items-center gap-2">
              <div
                className="customers-image d-flex position-relative"
                data-aos="fade-down"
              >
                <img
                  src={customerOne}
                  alt=""
                  width={45}
                  className="b-r-rounded-circle"
                />
                <img
                  src={customerTwo}
                  alt=""
                  width={45}
                  className="b-r-rounded-circle"
                />
              </div>
              <span className="fw-medium fs-1 marhey-ff">عملاء سعداء</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

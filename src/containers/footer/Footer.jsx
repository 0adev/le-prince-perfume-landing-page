import React from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { RiPhoneFill, RiWhatsappFill, RiMailFill } from "react-icons/ri";
import Banner from "../../assets/footer-banner.svg";
import "./footer.css";

function Footer() {
  return (
    <div className="princedlf__footer w-100" id="footer">
      <div className="princedlf__footer-container ">
        {/* first item */}
        <div className="princedlf__contact d-grid">
          <SectionHeader
            title={"اتصل بنا"}
            subTitle={"لا تتردد في التواصل معنا"}
          />
          <div className="princedlf__contact-container d-grid place-content-center gap-5">
            <div
              className="princedlf__contact-container-phone"
              data-aos="zoom-in"
            >
              <RiPhoneFill size={34} color="#ff9245" />
              <h3 className="fs-2 fw-medium">الهاتف</h3>
              <p className="fs-2 fw-medium">+212 669-320949</p>
            </div>
            <div
              className="princedlf__contact-container-email"
              data-aos="zoom-in"
            >
              <RiMailFill size={34} color="#ff9245" />
              <h3 className="fs-2 fw-medium">بريد إلكتروني</h3>
              <p className="fs-2 fw-medium">princedelafragrance@gmail.com</p>
            </div>

            <div
              className="princedlf__contact-container-whatsapp"
              data-aos="zoom-in"
            >
              <RiWhatsappFill size={34} color="#ff9245" />
              <h3 className="fs-2 fw-medium">الواتساب</h3>
              <p className="fs-2 fw-medium">+212 669-320949</p>
            </div>
          </div>
        </div>
        {/* second item */}
        <div className="princedlf__links d-flex justify-content-sp align-items-center gap-2">
          <div className="store__policy-links d-flex align-items-center gap-4">
            <a
              href=""
              className="text-primary fw-medium fs-1 marhey-ff text-deco"
            >
              سياسة الاستبدال والاسترجاع
            </a>
            <a
              href=""
              className="text-primary fw-medium fs-1 marhey-ff text-deco"
            >
              شروط الاستخدام
            </a>
            <a
              href=""
              className="text-primary fw-medium fs-1 marhey-ff text-deco"
            >
              سياسة الخصوصية
            </a>
          </div>
          <div className="store__copyright text-primary fw-medium fs-1 marhey-ff text-deco">
            © LE PRINCE DE LE FRAGRANCE 2022
          </div>
        </div>
        {/* third item */}
        <div className="princedlf__brand d-grid place-items-center">
          <img src={Banner} alt="footer banner" />
        </div>
      </div>
    </div>
  );
}

export default Footer;

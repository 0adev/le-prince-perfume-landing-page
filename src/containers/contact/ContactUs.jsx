import React from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { RiPhoneFill, RiWhatsappFill, RiMailFill } from "react-icons/ri";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="princedlf__contact section__margin" id="contact-us">
      <SectionHeader title={"اتصل بنا"} subTitle={"لا تتردد في التواصل معنا"} />
      <div className="princedlf__contact-container d-grid place-content-center gap-5">
        <div className="princedlf__contact-container-phone" data-aos="zoom-in">
          <RiPhoneFill size={34} color="#ff9245" />
          <h3 className="fs-3 fw-medium">الهاتف</h3>
          <p className="fs-3 fw-medium">+212 669-320949</p>
        </div>
        <div className="princedlf__contact-container-email" data-aos="zoom-in">
          <RiMailFill size={34} color="#ff9245" />
          <h3 className="fs-3 fw-medium">بريد إلكتروني</h3>
          <p className="fs-3 fw-medium">princedelafragrance@gmail.com</p>
        </div>

        <div
          className="princedlf__contact-container-whatsapp"
          data-aos="zoom-in"
        >
          <RiWhatsappFill size={34} color="#ff9245" />
          <h3 className="fs-3 fw-medium">الواتساب</h3>
          <p className="fs-3 fw-medium">+212 669-320949</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

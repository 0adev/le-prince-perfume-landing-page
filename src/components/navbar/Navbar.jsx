import React, { useState } from "react";
import {
  RiCloseLine,
  RiMenu3Line,
  RiWhatsappLine,
  RiFacebookCircleFill,
  RiInstagramFill,
} from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.webp";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function Menu({ className }) {
    return (
      <>
        <ul role="list" className={className}>
          <li>
            <a
              className="text-deco line-h-1 text-primary fs-2 fw-semibold transition"
              href="#features"
              onClick={() => setToggleMenu(false)}
            >
              المميزات
            </a>
          </li>
          <li>
            <a
              className="text-deco line-h-1 text-primary fs-2 fw-semibold transition"
              href="#collection"
              onClick={() => setToggleMenu(false)}
            >
              قائمة العطور
            </a>
          </li>
          <li>
            <a
              className="text-deco line-h-1 text-primary fs-2 fw-semibold transition"
              href="#testimonials"
              onClick={() => setToggleMenu(false)}
            >
              اراء الزبائن
            </a>
          </li>
          <li>
            <a
              className="text-deco line-h-1 text-primary fs-2 fw-semibold transition"
              href="#footer"
              onClick={() => setToggleMenu(false)}
            >
              تواصل معنا
            </a>
          </li>
        </ul>
      </>
    );
  }

  function SocialMediaIcons() {
    return (
      <div className="princedlf__navbar-socialMedia d-flex gap-3">
        <a href="#facebook">
          <RiFacebookCircleFill className="#text-primary" size={20} />
        </a>
        <a href="#whatsapp">
          <RiWhatsappLine className="#text-primary" size={20} />
        </a>
        <a href="#instagram">
          <RiInstagramFill className="#text-primary" size={20} />
        </a>
      </div>
    );
  }

  return (
    <div
      className="princedlf__navbar d-flex justify-content-sp align-items-end flex-row-reverse"
      data-aos="fade-down"
    >
      <div className="princedlf__navbar-links-logo">
        <a href="#" className="logo">
          <img src={logo} alt="le prince de la fragrance brand" width={100} />
        </a>
      </div>
      <nav className="princedlf__navbar-links">
        <Menu
          className={"d-flex justify-content-center align-items-end gap-7"}
        />
      </nav>

      <SocialMediaIcons />

      <div className="princedlf__navbar-menu d-none">
        {toggleMenu ? (
          <RiCloseLine
            size={27}
            onClick={() => setToggleMenu(false)}
            className="text-primary"
          />
        ) : (
          <RiMenu3Line
            className="text-primary"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="princedlf__navbar-menu_container d-grid place-items-center">
            <div className="princedlf__navbar-menu_container-links d-grid gap-7 place-items-center text-center">
              <div className="d-grid gap-7">
                <Menu className={"d-grid gap-4"} />
                <a
                  href="#order"
                  class="primary-btn text-deco text-light fs-1 fw-medium bg-dark border-none padding-3 b-r-rounded cursor-pointer transition"
                  onClick={() => setToggleMenu(false)}
                >
                  اطلب عطرك المفضل الان
                </a>
              </div>
              <SocialMediaIcons />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

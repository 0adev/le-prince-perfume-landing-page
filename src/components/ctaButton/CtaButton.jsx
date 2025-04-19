import React, { useState, useEffect } from "react";
import "./ctaButton.css";

const CtaButton = () => {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const footer = document.getElementById("footer");
      if (!header || !footer) return;

      const headerBottom = header.getBoundingClientRect().bottom;
      const footerTop = footer.getBoundingClientRect().top;

      const isSmallScreen = window.innerWidth < 768;
      const hasScrolledPastHeader = headerBottom <= 0;
      const hasReachedFooter = footerTop <= window.innerHeight;

      const shouldShowCTA =
        isSmallScreen && hasScrolledPastHeader && !hasReachedFooter;

      setShowCTA(shouldShowCTA);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll(); // initial run

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      {showCTA && (
        <a
          href="#order"
          className="cta-button text-deco text-center text-light fs-2 fw-medium bg-dark border-none padding-3 b-r-rounded cursor-pointer transition"
          id="#order"
        >
          اطلب عطرك المفضل الان
        </a>
      )}
    </>
  );
};

export default CtaButton;

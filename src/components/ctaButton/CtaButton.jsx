import React, { useState, useEffect } from "react";
import "./ctaButton.css";

const CtaButton = () => {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const orderSection = document.getElementById("order");

      if (!header || !orderSection) return;

      const headerBottom = header.getBoundingClientRect().bottom;
      const orderBottom = orderSection.getBoundingClientRect().top;

      const isSmallScreen = window.innerWidth < 768;
      const hasScrolledPastHeader = headerBottom <= 550;
      const isAboveOrderSection = orderBottom <= 600;

      // Show CTA only if:
      // 1. On small screen
      // 2. Scrolled past header
      // 3. Not at the top near the order section
      setShowCTA(
        isSmallScreen && hasScrolledPastHeader && !isAboveOrderSection
      );
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Trigger once on mount
    handleScroll();

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

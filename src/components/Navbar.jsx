import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function Navbar({ navOpen }) {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      const { offsetWidth, offsetLeft, offsetTop, offsetHeight } =
        lastActiveLink.current;
      Object.assign(activeBox.current.style, {
        width: `${offsetWidth}px`,
        left: `${offsetLeft}px`,
        top: `${offsetTop}px`,
        height: `${offsetHeight}px`,
      });
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox); // Cleanup listener
  }, []);

  useEffect(() => {
    if (navOpen) {
      setTimeout(initActiveBox, 300);
    }
  }, [navOpen]);

  const setActiveLink = (e) => {
    lastActiveLink.current?.classList.remove("active");
    e.target.classList.add("active");
    lastActiveLink.current = e.target;
    initActiveBox();
  };

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Reviews", link: "#reviews", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link lg:hidden" },
  ];

  return (
    <nav className={`navbar${navOpen ? " active" : ""}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          className={className}
          key={key}
          ref={ref || null}
          onClick={setActiveLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;

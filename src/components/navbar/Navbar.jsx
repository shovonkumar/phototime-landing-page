import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        if (window.scrollY >= 150) {
          setNavBg(true);
        } else {
          setNavBg(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-dark navbar-expand-md ${
        navBg ? "nav-bg" : "pt-md-5"
      }`}
      id="navbar"
    >
      <div className="container">
        <a
          className={`navbar-brand ${navBg ? "d-block" : "d-md-none"}`}
          href="#"
        >
          <img src="/images/logo.png" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <img
              src="/images/logo-black.png"
              alt="Logo"
              className="offcanvas-title"
              id="offcanvasNavbarLabel"
            />
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul
              className={`navbar-nav align-items-center pt-3 pt-lg-0 gap-md-4 gap-1 ${
                navBg ? "ms-auto" : "mx-auto"
              }`}
            >
              <li className="nav-item">
                <a className="nav-link" href="#banner">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Photoapp
                </a>
              </li>
              <li
                className={`nav-item ${navBg ? "d-none" : "d-none d-md-block"}`}
              >
                <a className="nav-link nav-link-logo" href="#banner">
                  <img src="/images/logo.png" alt="Logo" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#design">
                  Design
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#download">
                  Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

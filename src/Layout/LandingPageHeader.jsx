import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LandingPageHeader = () => {
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    let offCanvasNav = document.getElementById("offcanvas-navigation");
    let offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='mean-expand-class'>+</span>"
      );
    }

    let menuExpand = offCanvasNav.querySelectorAll(".mean-expand-class");
    let numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 250) {
        setScroll(false);
      } else if (window.pageYOffset > 250) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = document.querySelector(".tonavigate").offsetHeight;
      const offsetPosition = section.offsetTop - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setActive(false); // Close the mobile menu if it's open
  };

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.pageYOffset > 250);
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };

  return (
    <div className="tonavigate">
      {/* Mobile Menu */}
      <div className={`mobile-menu-wrapper ${active ? "body-visible" : ""}`}>
        <div className="mobile-menu-area">
          <div className="mobile-logo">
            <Link to="/">
              <img
                src="assets/img/logo.png"
                alt="COGNITEK SOLUTIONS"
                style={{ height: "4.25rem" }}
              />
            </Link>
            <button className="menu-toggle" onClick={mobileMenu}>
              <i className="fa fa-times" />
            </button>
          </div>
          <div className="mobile-menu">
            <ul id="offcanvas-navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => handleScrollToSection("about")}>
                <Link to="#">About</Link>
              </li>
              <li onClick={() => handleScrollToSection("service")}>
                <Link to="#">Services</Link>
              </li>
              <li onClick={() => handleScrollToSection("contact")}>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Header Area */}
      <header className="nav-header header-layout5">
        <div className={`sticky-wrapper ${scroll && "sticky"}`}>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <Link to="/">
                    <img
                      src="assets/img/logo.png"
                      alt="logo"
                      style={{ height: "4.25rem" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li onClick={() => handleScrollToSection("about")}>
                      <Link to="#">About Us</Link>
                    </li>
                    <li onClick={() => handleScrollToSection("service")}>
                      <Link to="#">Services</Link>
                    </li>
                    <li onClick={() => handleScrollToSection("contact")}>
                      <Link to="#">Contact</Link>
                    </li>
                    <li>
                      <Link to="#">Blog</Link>
                    </li>
                  </ul>
                </nav>
                <div className="navbar-right d-inline-flex d-lg-none">
                  <button
                    type="button"
                    className="menu-toggle icon-btn"
                    onClick={mobileMenu}
                  >
                    <i className="fas fa-bars" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LandingPageHeader;

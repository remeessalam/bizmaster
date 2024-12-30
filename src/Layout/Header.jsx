import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
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

  const mobileMenu = () => {
    setActive(!active);
  };

  const searchControl = (active) => {
    setSearch(active);
  };

  // const sidebarControl = (active) => {
  //   setSidebar(active);
  // };

  return (
    <>
      {/* <div className={`popup-search-box ${search === true ? "show" : ""} `}>
        <button className="searchClose" onClick={() => searchControl(false)}>
          <i className="fas fa-times" />
        </button>
        <form>
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
      </div> */}

      {/* Mobile Menu */}

      <div className={`mobile-menu-wrapper ${active ? "body-visible" : ""}`}>
        <div className="mobile-menu-area">
          <div className="mobile-logo">
            <Link to="/">
              <img src="assets/img/logo.png" alt="COGNITECH SOLUTIONS" />
            </Link>
            <button className="menu-toggle" onClick={mobileMenu}>
              <i className="fa fa-times" />
            </button>
          </div>
          <div className="mobile-menu">
            <ul id="offcanvas-navigation">
              <li className=" ">
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li className="">
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li className="">
                <Link to="#">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Header Area */}

      <header className="nav-header header-layout5">
        <div className={`sticky-wrapper ${scroll && "sticky"}`}>
          {/* Main Menu Area */}
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <Link to="/">
                    <img
                      src="assets/img/logo.png"
                      alt="logo"
                      style={{ height: "6rem" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li className="">
                      <Link to="/">Home</Link>
                    </li>

                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li className="">
                      <Link to="/service">Services</Link>
                    </li>

                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>

                    <li className="">
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
    </>
  );
};

export default Header;

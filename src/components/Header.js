// components/Header.jsx
"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const Header = () => {
  useEffect(() => {
    const header = document.querySelector(".header-sticky");

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 350) {
        header?.classList.add("sticky-show");
      } else {
        header?.classList.remove("sticky-show");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="container">
          <div className="navbar navbar-expand-lg">
            <a
              className="navbar-brand"
              href="https://www.rfirms.com/"
              target="_blank"
            >
              <Image src="/images/logo.png" alt="R Interior Logo" height={70} width={70} />
            </a>

            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item">
                    <a className="nav-link" href="#homeSection">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#aboutSection">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#serviceSection">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Partnerss">
                      Partners
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contactSection">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Header Button */}
              <div className="header-btn d-inline-flex">
                <a href="tel:+919888472333" className="btn-default1">
                  <i className="fa fa-phone mx-1" /> +91 988 847 2333
                </a>
              </div>
            </div>

            {/* Mobile Call Icon */}
            <div>
              <a
                href="tel:+919888472333"
                className="d-block d-lg-none"
                style={{
                  backgroundColor: "#fdb631",
                  height: 50,
                  width: 50,
                  borderRadius: "50%",
                  padding: 10,
                }}
              >
                <i className="fa fa-phone mx-2 my-2" />
              </a>
            </div>
          </div>
        </nav>
        <div className="responsive-menu" />
      </div>
    </header>
  );
};

export default Header;
